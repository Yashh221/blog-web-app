"use client"

import { ThemeContext } from "@/contexts/ThemeContext"
import React, { useContext } from "react"
export const ThemeProvider = ({children}) =>{
    const { theme } = useContext(ThemeContext)
    const [style, setStyle] = React.useState("")
    React.useEffect(() => {
         setStyle(theme === 'light' ? 'bg-white text-softBlack' : 'bg-darkModeBg text-darkText');
      }, [theme]);
    //   console.log(style)
    return(
        <div className={`max-w-full min-h-screen md:px-[7rem] lg:px-[10rem] ${style} `}>
            {children}
        </div>
    )
}