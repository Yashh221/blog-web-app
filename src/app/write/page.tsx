"use client";
import { external, image, plus, video } from "@/assets";
import Image from "next/image";
import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';

type Props = {};

const WritePost = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("")
  return (
    <div className="w-full px-8">
        <div className="flex flex-row text-[3.5rem] font-bold p-7">
            <input type="text" placeholder="Title" className="outline-none bg-transparent px-4" />
        </div>
      <div className="flex flex-row items-center gap-4">
        <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-darkText">
          <Image
            src={plus}
            alt="add"
            className="w-[20px] h-[20px]"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="flex flex-row gap-4">
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23]">
              <Image src={image} alt="image" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23]">
              <Image
                src={external}
                alt="external"
                className="w-[20px] h-[20px]"
              />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23]">
              <Image src={video} alt="video" className="w-[20px] h-[20px]" />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
      <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." style={{backgroundColor:"transparent"}}/>
      </div>
      <button className="absolute top-9 right-8 max-w-[120px] w-full py-2 bg-[#1a8917] rounded-xl" >
        Publish
      </button>
    </div>
  );
};

export default WritePost;
