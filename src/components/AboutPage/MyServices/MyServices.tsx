import Image from 'next/image'
import React from 'react'
import portfolioImg1 from '@/../public/portfolio/1.jpg'
import portfolioImg2 from '@/../public/portfolio/2.jpg'
import portfolioImg3 from '@/../public/portfolio/3.jpg'
import portfolioImg4 from '@/../public/portfolio/4.jpg'
import portfolioImg5 from '@/../public/portfolio/5.jpg'
import portfolioImg6 from '@/../public/portfolio/6.jpg'

const MyServices = () => {
  return (
    <section className="portfolio" id="portfolio">
        <div className="main-text">
            <h2 className="heading">Experties</h2>
            <span>what i will do for you</span>
        </div>
        <div className="fillter-buttons">
            <button className="button mixitup-control-active" data-filter="all">All Work</button>
            <button className="button" data-filter=".web">Web Development</button>
            <button className="button" data-filter=".uiux">UI/UX Design</button>
            <button className="button" data-filter=".branding">Branding Design</button>
        </div>

        <div className="portfolio-gallery">
            <div className="portfolio-box mix uiux">
                <div className="portfolio-content">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg1} alt='' />
                </div>
            </div>

            <div className="portfolio-box mix web">
                <div className="portfolio-content">
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg2} alt='' />
                </div>
            </div>

            <div className="portfolio-box mix web">
                <div className="portfolio-content">
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg3} alt='' />
                </div>
            </div>


            <div className="portfolio-box mix web">
                <div className="portfolio-content">
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg4} alt='' />
                </div>
            </div>

            <div className="portfolio-box mix uiux">
                <div className="portfolio-content">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg5} alt='' />
                </div>
            </div>

            <div className="portfolio-box mix branding">
                <div className="portfolio-content">
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.</p>
                    <a href="#" className="readMore">Explore More</a>
                </div>
                <div className="portfolio-img">
                    {/* ------------img------------- */}
                    <Image src={portfolioImg6} alt='' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default MyServices
