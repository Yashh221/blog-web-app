"use client";
import Image from "next/image";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import style from "./categorylist.module.css";

const CategoryList = () => {
  const [data, setData] = React.useState([]);
  const getCategories = React.useMemo((async () => {
    try {
      const data = await fetch("http://localhost:3002/api/categories", {
        cache: "no-store",
      });

      if (!data.ok) {
        throw new Error("Failed");
      }

      const res = await data.json();
      setData(res.data);
    } catch (error : any) {
      console.error("Error fetching categories:", error.message);
      return [];
    }
  }),[]);
  const router = useRouter();
  return (
    <div className="mt-8 px-12">
      <div className="font-bold text-3xl">Popular Category</div>
      <div className="w-full flex flex-row gap-x-6 mt-6">
        {data?.map((category: any) => (
          <div
            key={category.id}
            className={`${
              style[category.slug]
            } max-w-[150px] w-full rounded-xl py-3 gap-x-3 flex flex-row justify-center items-center cursor-pointer`}
            onClick={() => {
              router.push(`blogs?category=${category.slug}`);
            }}
          >
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                // fill
                width={40}
                height={40}
                src={`/${category.img}`}
                alt={category.slug}
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <span>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
