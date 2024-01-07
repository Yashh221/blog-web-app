import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page"));
  console.log(searchParams);
  const POST_PER_PAGE = 2;
  try {
    const posts = await prisma?.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });
    return new NextResponse(
      JSON.stringify({ message: "success", data: posts }),
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
