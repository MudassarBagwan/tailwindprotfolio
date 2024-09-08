import React from 'react'
import heroImg from '../assets/hero.svg';
import {FaGithubSquare,FaLinkedin,FaTwitterSquare} from 'react-icons/fa';


const Hero = () => {
  return (
    <div className='bg-sky-200 py-24 '>
      <div className='align-elements grid md:grid-cols-2 items-center gap-8'>
    <article>
        <h1 className='text-7xl font-bold tracking-wider'> 
            I'am Mudassar
        </h1>
<p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
    Front-End Developer
</p>
<p className='mt-2 text-lg text-slate-700 capitalize  tracking-wide'>
    Turing Ideas to Interactive reality.
</p>
<div className='flex gap-x-4 mt-4'>
<a href='https://github.com/'>
    <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
</a>
<a href='https://www.linkedin.com/'>
    <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
</a>
<a href='https://x.com/'>
    <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
</a>
</div>
    </article>

    <article className='hidden md:block'>
        <img src={heroImg} className='h-80 lg:h-96 '   alt='hero'/>
    </article>
      </div>

    </div>
  )
}

export default Hero
