import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroSec from '@/../public/pro-pic.png'




const Hero = () => {
  return (
  //   <section id="hero">
  //   <div className="hero container">
  //     <div>
  //       <h1>Hello, <span></span></h1>
  //       <h1>My Name is <span></span></h1>
  //       <h1>Mahnoor <span></span></h1>
  //       <a href="#projects" type="button" className="cta">Portfolio</a>
  //     </div>
  //   </div>
  // </section>

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

    <div className="social">
      <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
      <Link href="#"><i className="fa-brands fa-linkedin"></i></Link>
      <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
      <Link href="#"><i className="fa-brands fa-dribbble"></i></Link>
      <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
    </div>
  </div>
</div>


  

  )
}

export default Hero;