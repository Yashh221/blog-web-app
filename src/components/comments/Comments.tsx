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
  if (!res.ok) {
    const error = new Error("Failed to fetch comments");
    return error;
  }
  return data.data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const {status} = useSession();
  const [desc, setDesc] = React.useState("")
  const { data = [], mutate,isLoading } = useSWR(
    `http://localhost:3002/api/comments?postSlug=${postSlug}`,
    getComments
    );
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (!Array.isArray(data)) {
      return <div>No comments available</div>;
    }
    const handleSubmit = async() => {
      try {
        await fetch("/api/comments",
        {
          method:"POST",
          body:JSON.stringify({desc,postSlug})
        })
        mutate();
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className=" flex flex-col space-y-6">
      <div className="text-2xl font-semibold">Comments</div>
      <div className="flex flex-row items-center gap-16 ">
        {
          status === "authenticated" ? <>
        <div className="max-w-[600px]  w-full">
          <textarea className="w-full h-[70px] rounded-xl p-4 text-black" onChange={(e)=>setDesc(e.target.value)}>
            Write your comment
          </textarea>
        </div>
        <button className="max-w-[100px] w-full py-3 bg-[#dc143c] rounded-xl" onClick={handleSubmit}>
          Send
        </button>
        </>
          :
          <div>
            Login to write a comment
          </div>
        }
      </div>
      <div className="flex flex-col space-y-6">
        {isLoading ? (
          "Loading.."
        ) : data && data?.map((comment)=>(
          <div className="flex flex-col space-y-4" key={comment.id}>
            <div className="flex flex-row space-x-4">
              <Image
                src={comment?.user?.image}
                alt="hero"
                width={40}
                height={40}
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
