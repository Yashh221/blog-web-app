"use client"
import React, { useEffect, useState } from "react";
import Featured from "@/components/Featured/Featured";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { query } = router;
    const pageNumber = query.page ? parseInt(query.page as string) : 1;
    setPage(pageNumber);
  }, [router.query]);

  return (
    <div className="h-full">
      <Featured />
      <CategoryList />
      <div className="flex flex-row">
        <div className="flex-2">
          <CardList page={page} />
        </div>
        <div className="">
          <Menu />
        </div>
      </div>
    </div>
  );
}
