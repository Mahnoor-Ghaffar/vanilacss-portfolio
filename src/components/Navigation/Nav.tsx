'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';

const Nav: React.FC = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger') as HTMLElement | null;
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul') as HTMLElement | null;
    const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a') as NodeListOf<HTMLAnchorElement>;
    const header = document.querySelector('.header.container-nav') as HTMLElement | null;

    if (hamburger && mobile_menu && header) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      };

      const handleScroll = () => {
        const scroll_position = window.scrollY;
        header.style.backgroundColor = scroll_position > 250 ? 'black' : 'black';
        const scroll = window.scrollY;
        logo.style.color = scroll_position > 250 ? '#fcc707' : '#fcc707';
      };
     

      hamburger.addEventListener('click', handleHamburgerClick);
      document.addEventListener('scroll', handleScroll);

      menu_items.forEach((item) => {
        item.addEventListener('click', handleHamburgerClick);
      });

      // Cleanup event listeners on component unmount
      return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        document.removeEventListener('scroll', handleScroll);
        menu_items.forEach((item) => {
          item.removeEventListener('click', handleHamburgerClick);
        });
      };
    }
  }, []); 


  return (
    <div>
      <section id="header">
        <div className="header container-nav">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1><span id='logo'>M</span>ahnoor</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li id='Link-hover'><Link href="/" data-after="Service">Home</Link></li>
                <li id='Link-hover'><Link href="/about" data-after="Service">about</Link></li>
                <li id='Link-hover'><Link href="/contact" data-after="Service">contact</Link></li>
                <li id='Link-hover'><Link href="/#services" data-after="Service">services</Link></li>
                <li id='Link-hover'><Link href="#projects" data-after="Service">projects</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
