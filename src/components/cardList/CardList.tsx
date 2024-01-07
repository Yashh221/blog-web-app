import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

type Props = {}

const getPosts = async (page) => {
  try {
    const data = await fetch(`http://localhost:3002/api/posts?page=${page}`, {
      cache: "no-store",
    });

    if (!data.ok) {
      throw new Error("Failed");
    }

    const res = await data.json();
    return res.data;
  } catch (error : any) {
    console.error("Error fetching categories:", error.message);
    return [];
  }
};

const CardList =async ({page}) => {
  const data = await getPosts(page)
  return (
    <div className='px-12 mt-8'>
      <div className="font-bold text-3xl">
        Recent Posts
      </div>
      <div className='mt-8 space-y-6 py-4'>
        {
          data?.map((post)=>(
            <Card key={post._id} post={post}/>
          ))
        }

      </div>
        <Pagination page={page}/>
    </div>
  )
}

export default CardList