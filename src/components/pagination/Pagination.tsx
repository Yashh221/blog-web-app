import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className='flex flex-row justify-between items-center w-full px-4 mt-6 text-white'>
      <button className='max-w-[130px] w-full py-3 text-lg bg-[#dc143c] rounded-lg'>
        Previous
      </button> 
      <button className='max-w-[100px] w-full py-3 text-lg bg-[#dc143c] rounded-lg'>
        Next
      </button>
    </div>
  )
}

export default Pagination