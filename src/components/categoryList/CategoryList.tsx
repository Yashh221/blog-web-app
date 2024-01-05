"use client";
import Image from "next/image";
import React from "react";
import { Categories } from "@/constants/Categories";
import { useRouter } from "next/navigation";
type Props = {};

const CategoryList = (props: Props) => {
  const router = useRouter();
  return (
    <div className="mt-8 px-12">
      <div className="font-bold text-3xl">Popular Category</div>
      <div className="w-full flex flex-row gap-x-6 mt-6">
        {Categories.map((category, index) => (
          <div
            key={index}
            style={{ backgroundColor: category.color }}
            className={`max-w-[150px] w-full rounded-xl py-3 gap-x-3 flex flex-row justify-center items-center`}
            onClick={() => {
              router.push(`blogs?category=${category.name}`);
            }}
          >
            <Image
              src={category.img}
              alt="style"
              className="w-[40px] h-[40px] rounded-full overflow-hidden"
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
