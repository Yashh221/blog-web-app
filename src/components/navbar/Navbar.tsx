import { facebook, google, instagram, x } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Auth from '../auth/Auth'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full flex flex-row justify-between h-[120px] items-center'> 
    <div className='w-full flex flex-row gap-x-3 flex-1'>
        <Image src={facebook} alt="faceboook" className='w-[35px] h-[35px] mt-2'/>
        <Image src={google} alt="google" className='w-[45px] h-[50px] mt-1'/>
        <Image src={instagram} alt="instagram" className='w-[40px] h-[40px] mt-2'/>
        <Image src={x} alt="x" className='w-[30px] h-[30px] mt-3'/>
    </div>  
    <div className='font-bold flex-1 text-2xl flex justify-center items-center'>
        boogieblogs
    </div>
    <div className='flex-row flex gap-x-8 flex-1 justify-end'>
        <Link href="/home">
            <div>Home</div>
        </Link>
        <Link href="/contact">
            <div>Contact</div>
        </Link>
        <Link href="/about">
            <div>About</div>
        </Link>
        <Link href="/login">
            <Auth/>
        </Link>
    </div>
    </div>
  )
}

export default Navbar