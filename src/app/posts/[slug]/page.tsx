
import Comments from '@/components/comments/Comments'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import React from 'react'
import { image1 } from '../../../../public'

type Props = {}

const getPost = async (slug:string) => {
    try {
      const data = await fetch(`http://localhost:3002/api/posts/${slug}`, {
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

const SinglePage = async ({params}) => {
    const { slug } = params;
    const data = await getPost(slug)
  return (
    <div className='w-full mt-6'>
        <div className="w-full flex flex-row items-center">
            <div className="flex flex-col flex-1 space-y-12 px-10">
                <div className='flex flex-row flex-wrap text-4xl font-semibold'>{data?.title}</div>
                <div className='flex flex-row items-center'>
                    <Image src={data?.user.image} width={40} height={40} alt='hero' className='w-[40px] h-[40px] overflow-hidden rounded-full'/>
                    <div className='flex flex-row p-4'>
                        <span className='font-semibold'>{data?.user?.name}</span>&nbsp;-&nbsp;{data?.createdAt.substring(0,10)}
                    </div>
                </div>
            </div>
            <div className='flex flex-1'>
                <Image src={data?.img} width={600} height={350} alt='hero' className='w-[600px] h-[350px]'/>
            </div>
        </div>
        <div className='flex flex-row mt-10 justify-between'>
            <div className='flex flex-col space-y-6 flex-2 px-12'>
               {data?.desc && (
                   
                   <div className='mt-10' dangerouslySetInnerHTML = { { __html: data?.desc } }></div>
               )}
                <Comments postSlug={slug}/>
            </div>
            <Menu/>
        </div>
        
    </div>
  )
}

export default SinglePage