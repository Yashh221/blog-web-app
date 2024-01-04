import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div className='px-12 mt-8'>
      <div className="font-bold text-3xl">
        Recent Posts
      </div>
      <div className='mt-8 space-y-6'>

        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
        <Pagination/>
    </div>
  )
}

export default CardList