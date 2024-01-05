"use client"
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";
import { useQueryState } from "next-usequerystate";

type Props = {};

const Blogs = (props: Props) => {
    const [category,setCategory] = useQueryState('category')
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row w-[90%] p-4 justify-center items-center text-2xl font-sembold bg-[#306fdc]">
        { category } Page
      </div>
      <div className="flex flex-row">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
