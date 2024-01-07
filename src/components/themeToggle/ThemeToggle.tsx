'use client'
import React from 'react'
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { moon, sun } from '../../../public';
import { ThemeContext } from '@/contexts/ThemeContext';

type Props = {}

const ThemeToggle = (props: Props) => {

  const { theme, toggle } = React.useContext(ThemeContext)
    const [isDarkMode, setDarkMode] = React.useState(false);
    const handleClick = () => {
      setDarkMode(!isDarkMode);
      toggle();
    };
  return (
    <div>
  <input type="checkbox" className={styles.checkbox} id="checkbox" checked={isDarkMode} onChange={handleClick}/>
  <label htmlFor="checkbox" className={`${styles.checkboxLabel} ${theme === "dark" ? "bg-[#fff]":"bg-[#111]"}`}>
    <Image src={moon} alt='moon'className='w-[20px] h-[20px]'/>
    <Image src={sun} alt='sun'className='w-[20px] h-[20px]'/>
    <span className={`${styles.ball} ${theme === "dark" ? "bg-[#111]":"bg-[#fff]"}`}></span>
  </label>
</div>
  )
}

export default ThemeToggle