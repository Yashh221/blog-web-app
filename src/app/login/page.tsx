"use client"
import { ThemeContext } from '@/contexts/ThemeContext'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div className='w-full h-full flex flex-row justify-center items-center'>
        <div className="flex flex-col items-center justify-center space-y-6 bg-darkSoftBlack rounded-xl p-16 max-w-[600px] w-full">
            <div className={`font-semibold text-2xl ${theme === "light" && "text-black"}`}>
                Login
            </div>
            <input type='email' name='email' placeholder='Email' className='w-full p-3 outline-none text-black placeholder:text-black bg-transparent border-[1px] border-solid border-t-0 border-x-0 border-[#dc143c]'/>
            <input type='password' name='password' placeholder='Password' className='w-full p-3 outline-none text-black placeholder:text-black bg-transparent border-[1px] border-solid border-t-0 border-x-0 border-[#dc143c]'/>
            <button className={`max-w-[100px] w-full py-3 bg-[#dc143c] rounded-xl ${theme === "light" && "text-black"}`}>Login</button>
            <div className='font-semibold text-base'>
                or
            </div>
            <button className={`max-w-[250px] w-full py-3 bg-[#dc143c] rounded-xl ${theme === "light" && "text-black"}`}>Sign up with Google</button>
            <button className={`max-w-[250px] w-full py-3 bg-[#306fd7] rounded-xl ${theme === "light" && "text-black"}`}>Sign up with Facebook</button>
        </div>
    </div>
  )
}

export default Login