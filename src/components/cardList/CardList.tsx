import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

type Props = {}

const getPosts = async (page:number,cat:string) => {
  try {
    const data = await fetch(`http://localhost:3002/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });

    if (!data.ok) {
      throw new Error("Failed");
    }

    const res = await data.json();
    return [res.data,res.count];
  } catch (error : any) {
    console.error("Error fetching categories:", error.message);
    return [];
  }
};

const CardList =async ({page,cat}:{page:number,cat?:string}) => {
  const data = await getPosts(page,cat)
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < data[1]

  return (
    <div className='px-12 mt-8'>
      <div className="font-bold text-3xl">
        Recent Posts
      </div>
      <div className='mt-8 space-y-6 py-4'>
        {
          data[0]?.map((post)=>(
            <Card key={post._id} post={post}/>
          ))
        }

      </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList