import React from 'react'
import { Tilt } from 'react-tilt'
import '../css/Card.css'
import { Link } from 'react-router-dom'

const Card = ({ title, img, desc, link }) => {

    const Options = {
        reverse:        false,  // reverse the tilt direction
        max:            80,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          30,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.0,.98,.52,.99)",    // Easing on enter/exit.
    }

  return (
    <Link to={`/work/${link}`}>
      <Tilt 
          className='cardContainer'
          options={Options}
          >
            <h2>{title}</h2>
            <img className='cardImg' src={img} />
            <p>{desc}</p>
      </Tilt>
    </Link>
  )
}

export default Card