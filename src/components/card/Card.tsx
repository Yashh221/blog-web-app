import capitalize from '@/utils/capitalize'
import { image1 } from '../../../public'
import Image from 'next/image'
import React from 'react'

type Props = {}


const Card = ({key,post}) => {
  return (
    <div key={key} className='max-w-[1000px] w-full flex flex-row gap-x-6'>

        <Image width={400} height={300} src={`/${post.img}`} alt='hero' className='max-w-[400px] h-[300px]' />
        
        <div className="flex flex-col space-y-5 py-3">
            <div className="flex flex-row">
                05.01.2024&nbsp;-&nbsp;<span className='text-red-900'>{capitalize(post.slug)}</span>
            </div>
            <div className='text-2xl font-semibold flex'>
                {post.title}
            </div>
            <div className='text-base flex'>
                {post.desc}
            </div>
            <div className='flex max-w-[100px] w-full border-[1px] border-solid border-[red] border-t-0 border-x-0'>
                Read More
            </div>
        </div>
    </div>
  )
}

export default Card