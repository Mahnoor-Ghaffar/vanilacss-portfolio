import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroSec from '@/../public/pro-pic.png'




const Hero = () => {
  return (
  <div className="hero-container">
  <div className="hero-pic">
    <Image src={HeroSec} alt="profile pic" />
  </div>
  <div className="hero-text">
    <h5>Hi I'm <span className="input">Web Developer</span></h5>
    <h1>Mahnoor Ghaffar</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta delectus dolorum
      quibusdam maiores magni quod rem in porro, laborum, laudantium ex repellendus explicabo,
      autem molestiae!
    </p>

    <div className="btn-group">
      <Link href="#" className="btn active">Download CV</Link>
      <Link href="#" className="btn">Contact</Link>
    </div>

  </div>
</div>


  

  )
}

export default Hero;