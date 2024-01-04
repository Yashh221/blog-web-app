import { image1 } from '@/assets'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='max-w-[1000px] w-full flex flex-row gap-x-6'>
        <Image src={image1} alt='hero' className='max-w-[400px] h-[300px]' />
        <div className="flex flex-col space-y-5 py-3">
            <div className="flex flex-row">
                05.01.2024&nbsp;-&nbsp;<span className='text-red-900'>Culture</span>
            </div>
            <div className='text-2xl font-semibold flex'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='text-base flex'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum neque quisquam omnis voluptatum esse modi in nostrum perferendis sequi exercitationem hic aut, quidem ut corporis id repudiandae dolores architecto molestiae.
            </div>
            <div className='flex max-w-[100px] w-full border-[1px] border-solid border-[red] border-t-0 border-x-0'>
                Read More
            </div>
        </div>
    </div>
  )
}

export default Card