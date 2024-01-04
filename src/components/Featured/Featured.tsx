"use client"
import { image1 } from '@/assets'
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Featured = (props: Props) => {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div className='w-full px-12'>
      <div className=' text-[4rem] justify-start'>
        <span className='font-extrabold'>Hey, Yash here !</span> Discover my stories and creative ideas.
      </div>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='flex w-full max-w-[550px] h-[400px]'>
          <Image src={image1} alt='hero' className='w-[550px] h-[400px]'/>
        </div>
        <div className='flex flex-col flex-1 gap-4 justify-center items-start'>
          <h1 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fugiat modi. Aperiam obcaecati corporis vel ipsam, eligendi alias vitae libero ad magni, sunt saepe assumenda aspernatur amet velit iste harum? Praesentium aperiam voluptates distinctio quos unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, dignissimos eum! Saepe accusamus maiores delectus distinctio. Nobis quisquam debitis vitae, rerum assumenda adipisci consectetur. Molestias ipsam dolore corrupti vel eveniet.</p>
          <button className={`max-w-[150px] w-full rounded-xl py-4 ${theme === 'light' ? 'bg-darkModeBg text-darkText' : 'bg-white text-softBlack'}`}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured