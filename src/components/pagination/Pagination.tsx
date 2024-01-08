"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Pagination = ({page,hasPrev,hasNext}:{page:number,hasPrev:boolean,hasNext:boolean}) => {
  const router = useRouter()
  return (
    <div className='flex flex-row justify-between items-center w-full px-4 mt-6 text-white'>
      <button className={`max-w-[130px] w-full py-3 text-lg bg-[#dc143c] rounded-lg ${!hasPrev && "bg-[#ff608097] cursor-not-allowed"}`}
      onClick={()=>router.push(`?page=${page-1}`)}
      disabled={!hasPrev}
      >
        Previous
      </button> 
      <button className={`max-w-[100px] w-full py-3 text-lg bg-[#dc143c] rounded-lg ${!hasNext && "bg-[#ff608097] cursor-not-allowed"}`}
      onClick={()=>router.push(`?page=${page+1}`)}
      disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination