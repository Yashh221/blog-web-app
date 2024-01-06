"use client"
import { ThemeContext } from '@/contexts/ThemeContext'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  const router = useRouter()
  const {theme } = React.useContext(ThemeContext)
  const { data, status } = useSession()
  if(status === "authenticated")
  {
    router.push("/")
  }
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
            <div className={`text-center cursor-pointer max-w-[250px] w-full py-3 bg-[#dc143c] rounded-xl ${theme === "light" && "text-black"}`} onClick={()=>signIn("google")}>Sign up with Google</div>
        </div>
    </div>
  )
}

export default Login