"use client";
import { useSession } from "next-auth/react";
import { image1 } from "../../../public";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

type Props = {};

const getComments = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();
  // console.log(data)

  if (!res.ok) {
    const error = new Error("Failed to fetch comments");
    return error;
  }
  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const status = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3002/api/comments?postSlug=${postSlug}`,
    getComments
    );
    console.log(data)
  return (
    <div className=" flex flex-col space-y-6">
      <div className="text-2xl font-semibold">Comments</div>
      <div className="flex flex-row items-center gap-16 ">
        <div className="max-w-[600px]  w-full">
          <textarea className="w-full h-[70px] rounded-xl p-4 text-black">
            Write your comment
          </textarea>
        </div>
        <button className="max-w-[100px] w-full py-3 bg-[#dc143c] rounded-xl">
          Send
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {isLoading ? (
          "Loading.."
        ) : data?.map((comment)=>(
          <div className="flex flex-col space-y-4" key={comment._id}>
            <div className="flex flex-row space-x-4">
              <Image
                src={comment?.user?.image}
                alt="hero"
                className="w-[40px] h-[40px] overflow-hidden rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-semibold">{comment?.user?.name}</div>
                <div className="text-sm">{comment?.createdAt.substring(0,10)}</div>
              </div>
            </div>
            <div className="flex flex-row p-2">
              {comment?.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
