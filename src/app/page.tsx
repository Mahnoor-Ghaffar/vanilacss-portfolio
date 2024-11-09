

import ContactInfo from '@/components/HomePage/ContactInfo/ContactInfo';
import Hero from '@/components/HomePage/Hero/Hero';
import Projects from '@/components/HomePage/Projects/Projects';
import Services from '@/components/HomePage/Services/Services';
import React from 'react'

const Home = () => {
  return (
    <main className='w-[80%]'>
      <Hero />
      <Services />
      <Projects />
      <ContactInfo />
    </main>
  )
}

export default Home;