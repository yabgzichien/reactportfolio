import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navBarContainer'>
        <Link to='/' className='navBarNameContainer'> 
            <img src='/logo.png' className='navBarLogo' />
            <p className='navBarName'>ZiChien</p>
        </Link >

        <div className='navBarButtonContainer'>

            <button style={{ color: 'transparent', cursor: 'default'}} className='navBarBtn'>
                
            </button>

            <button style={{ color: 'transparent', cursor: 'default'}} className='navBarBtn'>
               
            </button>
        </div>

    </div>
  )
}

export default Navbar