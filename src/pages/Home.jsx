import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Certs from '../components/Certs'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import { useRef } from 'react'

const Home = () => {

  const aboutRef = useRef(null)
  const certsRef = useRef(null)
  const heroRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <div >
        <div className='navBarContainer'>
            <div onClick={()=> heroRef.current?.scrollIntoView({ behavior: 'smooth' })} className='navBarNameContainer'> 
                <img src='./logo.png' className='navBarLogo' />
                <p className='navBarName'>ZiChien</p>
            </div >

            <div className='navBarButtonContainer'>

                <button onClick={()=> aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} className='navBarBtn'>
                    About
                </button>

                <button onClick={()=> certsRef.current?.scrollIntoView({ behavior: 'smooth' })} className='navBarBtn'>
                    Certificates
                </button>

                <button onClick={()=> projectsRef.current?.scrollIntoView({ behavior: 'smooth' })} className='navBarBtn'>
                    Projects  
                </button>

                <a href="https://github.com/yabgzichien" className="navBarBtn">
                  <img src="./github.png" className="githubLogo"  />
                  Github
                </a>
            </div>

        </div>

        <div ref={heroRef}>
         <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div >
          <Skills />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>
        

        <div ref={certsRef}>
          <Certs />
        </div>
    </div>
  )
}

export default Home