"use client"
import { facebook, google, instagram, x } from '../../../public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Auth from '../auth/Auth'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { Turn as Hamburger } from "hamburger-react";
import { ThemeContext } from '@/contexts/ThemeContext'

type Props = {}

const Navbar = (props: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const { theme } = React.useContext(ThemeContext)
    const [selectedTab, setSelectedTab] = React.useState(() => {
        if (typeof window !== 'undefined') {
          return localStorage.getItem('headerTab') || 'home';
        }
        return 'home';
      })
  
    const handleTab = (tab : string) =>{
      setSelectedTab(tab)
      localStorage.setItem("headerTab",tab);
    }
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    React.useEffect(()=>
    {
      setSelectedTab(localStorage.getItem("headerTab") || "home")
    },[selectedTab])
  return (
    <div className='w-full flex flex-row justify-between h-[120px] items-center px-12'> 
    <div className='w-full hidden lg:flex flex-row gap-x-3 flex-1'>
        <Image src={facebook} alt="faceboook" className='w-[35px] h-[35px] mt-2'/>
        <Image src={google} alt="google" className='w-[45px] h-[50px] mt-1'/>
        <Image src={instagram} alt="instagram" className='w-[40px] h-[40px] mt-2'/>
        <Image src={x} alt="x" className='w-[30px] h-[30px] mt-3'/>
    </div>  
    <div className='font-bold md:flex-1 text-2xl flex md:justify-center justify-start items-center'>
        boogieblogs
    </div>
    <div className='flex-row hidden md:flex gap-x-8 flex-1 justify-end'>
        <ThemeToggle/>
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
    <button
        className="md:hidden hover:text-blue-200 fixed right-3"
        onClick={toggleSidebar}
      >
        <Hamburger
          toggled={isSidebarOpen}
          toggle={setIsSidebarOpen}
          size={24}
          color={isSidebarOpen ? "#000000" : "#306fd7"}
          
        />
      </button>
      {isSidebarOpen && (
        <div
          className={`lg:hidden text-2xl  flex flex-col justify-start items-center space-y-7 w-full h-screen md:w-[50%] absolute top-[75px] right-0 ${theme === "light" ? "bg-white":"bg-darkModeBg"} p-4 shadow transform transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Sidebar links */}
          <Link href="/">
          <div  className={`block ${selectedTab === "home" ? "text-[royalblue]" : theme === "light" ? "text-black" :"text-darkText"} my-2 mt-[70px] `} onClick={()=>handleTab("home")}>
            Home
          </div>
          </Link>
          <Link href="/contact">
          <div  className={`block ${selectedTab === "contact" ? "text-[royalblue]" : theme === "light" ? "text-black" :"text-darkText"} my-2`} onClick={()=>handleTab("contact")}>
            Contact
          </div>
          </Link>
          <Link href="/about">
          <div  className={`block ${selectedTab === "about" ? "text-[royalblue]" : theme === "light" ? "text-black" :"text-darkText"} my-2`} onClick={()=>handleTab("about")}>
            About
          </div>
          </Link>
          <Link href="/login">
          <div  className={`block ${selectedTab === "auth" ? "text-[royalblue]" : theme === "light" ? "text-black" :"text-darkText"} my-2`} onClick={()=>handleTab("auth")}>
            <Auth/>
          </div>
          </Link>
        <ThemeToggle/>
        </div>
      )}
    </div>
  )
}

export default Navbar