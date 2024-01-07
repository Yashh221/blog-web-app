import { image1 } from '../../../public'
import Comments from '@/components/comments/Comments'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import React from 'react'

type Props = {}

const SinglePage = (props: Props) => {
  return (
    <div className='w-full mt-6'>
        <div className="w-full flex flex-row items-center">
            <div className="flex flex-col flex-1 space-y-12 px-10">
                <div className='flex flex-row flex-wrap text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                <div className='flex flex-row items-center'>
                    <Image src={image1} alt='hero' className='w-[40px] h-[40px] overflow-hidden rounded-full'/>
                    <div className='flex flex-row p-4'>
                        <span className='font-semibold'>John Doe</span>&nbsp;-&nbsp;05.01.2024
                    </div>
                </div>
            </div>
            <div className='flex flex-1'>
                <Image src={image1} alt='hero' className='w-[600px] h-[350px]'/>
            </div>
        </div>
        <div className='flex flex-row mt-10 justify-between'>
            <div className='flex flex-col space-y-6 flex-2 px-12'>
                <div className='mt-10'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque velit porro vel cumque ipsam sunt? Nostrum quam fugiat at, nulla voluptatum unde expedita animi? In corporis debitis at mollitia facere iusto vero natus ducimus. Ipsa suscipit, explicabo alias nobis saepe rem quo rerum in similique magni. Fugiat enim, voluptatibus nemo repellat non consequatur adipisci culpa est quas ut maxime dolores doloribus iusto aspernatur eveniet unde, odio illo, neque minus. Facilis ipsam consequuntur officia eum ducimus vel eveniet quam, dolore animi veniam maiores saepe ratione repellat non velit accusamus molestiae a ea? Incidunt officiis eius doloremque ratione! Natus, architecto ut. Voluptatum dicta tempora, repudiandae eveniet voluptate, natus reiciendis animi cumque perferendis amet expedita obcaecati consectetur blanditiis corporis deleniti nihil? Maiores reprehenderit atque, commodi velit eaque consectetur soluta dolore ex est? In inventore iste maiores et, veritatis aut qui minus quia aliquam quisquam corrupti natus quae ea repellendus officia debitis culpa, harum quam pariatur quod obcaecati placeat minima aperiam? Expedita corrupti inventore quos error magnam doloremque! Ullam sunt explicabo voluptatum, soluta deleniti, optio corrupti laudantium perferendis, ducimus id ipsam! Minus fuga harum quo, id animi, dolorem explicabo dicta architecto labore magnam veritatis totam delectus. Consectetur, recusandae sint error dolorem eveniet aliquid suscipit.
                </div>
                <Comments/>
            </div>
            <Menu/>
        </div>
        
    </div>
  )
}

export default SinglePage