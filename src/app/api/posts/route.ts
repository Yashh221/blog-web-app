import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page"), 10);
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await prisma?.$transaction([
      prisma?.post.findMany(query),
      prisma?.post.count({
        where: {
          ...(cat && { catSlug: cat }),
        },
      }),
    ]);
    return new NextResponse(
      JSON.stringify({ message: "success", data: posts, count: count }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "User is not auteneticated" }),
      { status: 401 }
    );
  }
  try {
    const body = await req.json();
    const newPost = await prisma?.post?.create({
      data: { ...body, userEmail: session && session?.user?.email },
    });
    return new NextResponse(
      JSON.stringify({ message: "success", data: newPost }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
