import Image from 'next/image';
import React from 'react';
import { FaTv, FaLaptop, FaPhoneAlt,FaBriefcase, FaPaintBrush } from 'react-icons/fa';
import { BiCode } from 'react-icons/bi';
import { MdOutlineHeadphones } from 'react-icons/md';

const Services = () => {
  return (
<section id="services" className="services">
            <div className="Services-Cards">
                <h1 className="section-title"><span>Our </span>Services</h1>
                <p>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper">
                    <div className="card">
                        {/* <Image src={brush} alt='' className='img' height={100} width={100} /> */}
                        <div className='icon-background'>
                        <FaPaintBrush className='img' />
                        </div>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        {/* <Image src={code} alt='' className='img' /> */}
                        <div className='icon-background'>
                        <FaBriefcase className='img' />
                        </div>

                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        {/* <Image src={bag} alt='' className='img' /> */}
                        <div className='icon-background'>
                        <BiCode className='img' />
                        </div>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        {/* <Image src={desktop} alt='' className='img' /> */}
                        <div className='icon-background'>
                        <MdOutlineHeadphones className="img" />
                        </div>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        {/* <Image src={media} alt='' className='img' /> */}
                        <div className='icon-background'>
                        <FaLaptop className='img' />
                        </div>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        {/* <Image src={phone} alt='' className='img' /> */}
                        <div className='icon-background'>
                        <FaPhoneAlt className='img' />
                        </div>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Services