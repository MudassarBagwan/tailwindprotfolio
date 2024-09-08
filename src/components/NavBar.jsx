import React from 'react'
import {links} from '../assets/data'
const NavBar = () => {
  return (
    <nav className='bg-sky-200 '>
   <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-16 sm:items:center sm:py-8'>
   <h2 className='text-3xl font-bold'>Web <span className='text-sky-600'>Dev</span></h2>
   <div className='flex gap-x-3'>
    {links.map((link)=>{

        const {id,href,text}=link;
        return <a key={id} href={href} className='capitalize text-lg tracking-wide hover:text-sky-800  duration-300'>{text}</a>
    })}
   </div>
   </div>
    </nav>
  )
}

export default NavBar

