import Image from 'next/image'
import React from 'react'
import img1 from '@/../public/img/img-01.jpg'
import img2 from '@/../public/img/img2.jpg'
import img3 from '@/../public/img/img3.png'
// import img4 from '@/../public/img/img4.JFIF'
import img4 from '@/../public/img/img-004.jpg'
import img5 from '@/../public/img/img5.jpg'


const Projects = () => {
  return (
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
            <h1>Project 1</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            {/* -------------img ------------------*/}
            <Image src={img1} alt='img' width={1000} height={1000} loading='lazy'/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 2</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            {/* -------------img ------------------*/}
            <Image src={img2} alt='img' width={1000} height={1000} loading='lazy'/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 3</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            {/* -------------img ------------------*/}
            <Image src={img3} alt='img' width={1000} height={1000} loading='lazy'/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 4</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            {/* -------------img ------------------*/}
            <Image src={img4} alt='img' width={1000} height={1000} loading='lazy'/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 5</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            {/* -------------img ------------------*/}
            <Image src={img5} alt='img' width={1000} height={1000} loading='lazy'/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects