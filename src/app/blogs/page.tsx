"use client"
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";
// import { useQueryState } from "next-usequerystate";

type Props = {};

const Blogs = ({searchParams}) => {
    // const [category,setCategory] = useQueryState('category')
    const page = parseInt(searchParams.page) || 1;
    const cat = searchParams.category || "";
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row w-[90%] p-4 justify-center items-center text-2xl font-sembold bg-[#306fdc] capitalize">
        { cat } Page
      </div>
      <div className="flex flex-row w-full">
      <div className="flex-2">
          <CardList page={page} cat={cat}/>
        </div>
        <div className="">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
