import { image1 } from "../../../public";
import Image from "next/image";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div className=" flex flex-col space-y-6">
      <div className="text-2xl font-semibold">Comments</div>
      <div className="flex flex-row items-center gap-16 ">
        <div className="max-w-[600px]  w-full">
          <textarea className="w-full h-[70px] rounded-xl p-4 text-black">
            Write your comment
          </textarea>
        </div>
        <button className="max-w-[100px] w-full py-3 bg-[#dc143c] rounded-xl">Send</button>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <Image
              src={image1}
              alt="hero"
              className="w-[40px] h-[40px] overflow-hidden rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm">05.01.2024</div>
            </div>
          </div>
          <div className="flex flex-row p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            hic assumenda consequuntur.
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <Image
              src={image1}
              alt="hero"
              className="w-[40px] h-[40px] overflow-hidden rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm">05.01.2024</div>
            </div>
          </div>
          <div className="flex flex-row p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            hic assumenda consequuntur.
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <Image
              src={image1}
              alt="hero"
              className="w-[40px] h-[40px] overflow-hidden rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm">05.01.2024</div>
            </div>
          </div>
          <div className="flex flex-row p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            hic assumenda consequuntur.
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <Image
              src={image1}
              alt="hero"
              className="w-[40px] h-[40px] overflow-hidden rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm">05.01.2024</div>
            </div>
          </div>
          <div className="flex flex-row p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            hic assumenda consequuntur.
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Comments;
