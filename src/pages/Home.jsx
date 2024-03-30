import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Certs from '../components/Certs'

import { useRef } from 'react'

const Home = () => {

  const aboutRef = useRef(null)
  const certsRef = useRef(null)
  const heroRef = useRef(null)

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
            </div>

        </div>

        <div ref={heroRef}>
         <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={certsRef}>
          <Certs />
        </div>
    </div>
  )
}

export default Home