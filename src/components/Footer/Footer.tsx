import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>M</span>ahnoor <span>G</span>haffar</h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div className="social-icon">
        <div className="social-item">
          <Link href="#">
          <Image src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="icons" />
          </Link>
        </div>
        <div className="social-item">
          <Link href="#">
          <Image src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="icons" />
          </Link>
        </div>
        <div className="social-item">
          <Link href="#">
          <Image src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="icons" />
          </Link>
        </div>
        <div className="social-item">
          <Link href="#">
          <Image src="https://img.icons8.com/bubbles/100/000000/behance.png" alt="icons" />
          </Link>
        </div>
      </div>
      <p>Copyright © 2024 Mahnoor. All rights reserved</p>
    </div>
  </section>
  )
}

export default Footer