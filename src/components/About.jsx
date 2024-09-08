import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-elements grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} alt='about' className='w-full h-64'/>
            <article>
                <SectionTitle text='About us'/>
                <p className='text-slate-600 mt-8 leading-loose '>
                Welcome to my corner of the web! I’m Mudassar, a passionate frontend web developer with a knack for creating engaging, interactive experiences. With a focus on modern React development, I turn complex problems into elegant, user-friendly solutions.
                </p>
            </article>
        </div>
      
    </section>
  )
}

export default About
