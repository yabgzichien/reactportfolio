import React from 'react'
import '../css/Hero.css'
import Computer from './Computer'

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='heroHeader'>
        <h1 className='heroName' > Hi, I am Zi Chien </h1>
        <p>a high school graduate from Malaysia</p>
      </div>
      <Computer />
    </div>
  )
}

export default Hero