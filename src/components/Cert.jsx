import React from 'react'
import '../css/Cert.css'
import { Link } from 'react-router-dom'

const Cert = ({ title, img, link }) => {
  return (
    <Link to={`/cert/${link}`}>
      <div className='certContainer'>
          <img src={img} className='certImg' />
          <h2 className='certTitle'> {title} </h2>
      </div>
    </Link>
  )
}

export default Cert