import React from 'react'
import '../css/Hero.css'
import RetroComputer from './RetroComputer'

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='heroHeader'>
        <h1 className='heroName' > Hi, I am Yang Zi Chien </h1>
        <p>a student majoring in Data Science.</p>
      </div>
      <RetroComputer />
    </div>
  )
}

export default Hero