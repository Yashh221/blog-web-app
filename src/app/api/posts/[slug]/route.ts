import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma?.post.findUnique({
      where: {
        slug: slug,
      },
      include: { user: true },
    });
    return new NextResponse(
      JSON.stringify({ message: "success", data: post }),
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
