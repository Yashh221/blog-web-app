import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='mt-6'>
      <div className='text-lg'>
        What's Hot
      </div>
      <div className='text-2xl font-semibold'>
        Most Popular
      </div>
      <div className='flex flex-col space-y-3 mt-6'>
        <div className='flex flex-col space-y-1'>
          <div className='max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center'>
            Culture
          </div>
          <div className='font-semibold text-base '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='text-sm'>
            John Doe&nbsp;-&nbsp;<span className='font-sembold'>05.01.2024</span>
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center'>
            Culture
          </div>
          <div className='font-semibold text-base '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='text-sm'>
            John Doe&nbsp;-&nbsp;<span className='font-sembold'>05.01.2024</span>
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center'>
            Culture
          </div>
          <div className='font-semibold text-base '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='text-sm'>
            John Doe&nbsp;-&nbsp;<span className='font-sembold'>05.01.2024</span>
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='max-w-[100px] w-full rounded-full bg-[#7fb88133] text-sm flex flex-row justify-center items-center'>
            Culture
          </div>
          <div className='font-semibold text-base '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='text-sm'>
            John Doe&nbsp;-&nbsp;<span className='font-sembold'>05.01.2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu