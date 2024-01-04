"use client"
import { coding, culture, fashion, food, style, travel } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};
const Categories = [
  {
    color:"#57c4ff31",
    img:style,
    name:"Style"
  },
  {
    color:"#da85c731",
    img:fashion,
    name:"Fashion"
  },
  {
    color:"#7fb88133",
    img:food,
    name:"Food"
  },
  {
    color:"#ff795736",
    img:travel,
    name:"Travel"
  },
  {
    color:"#ffb04f45",
    img:culture,
    name:"Culture"
  },
  {
    color:"#5e4fff31",
    img:coding,
    name:"Coding"
  },
]

const CategoryList = (props: Props) => {
  return (
    <div className="mt-8 px-12">
      <div className="font-bold text-3xl">Popular Category</div>
      <div className="w-full flex flex-row gap-x-6 mt-6">
        {
          Categories.map((category,index)=>(
        <div key={index} style={{ backgroundColor: category.color }} className={`max-w-[150px] w-full rounded-xl py-3 gap-x-3 flex flex-row justify-center items-center`}>
          <Image
            src={category.img}
            alt="style"
            className="w-[40px] h-[40px] rounded-full overflow-hidden"
          />
          <span>{category.name}</span>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryList;
