"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Pagination = ({page}:{page:number}) => {
  const router = useRouter()
  return (
    <div className='flex flex-row justify-between items-center w-full px-4 mt-6 text-white'>
      <button className='max-w-[130px] w-full py-3 text-lg bg-[#dc143c] rounded-lg'
      onClick={()=>router.push(`?page=${page-1}`)}>
        Previous
      </button> 
      <button className='max-w-[100px] w-full py-3 text-lg bg-[#dc143c] rounded-lg'
      onClick={()=>router.push(`?page=${page+1}`)}>
        Next
      </button>
    </div>
  )
}

export default Pagination