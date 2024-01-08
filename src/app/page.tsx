import Featured from "@/components/Featured/Featured";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1

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
