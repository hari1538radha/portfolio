import React from 'react'
import "./Navbar.css"
import icon from "../Images/i-icon.svg"

const Navbar = () => {
  return (
    <div>
       <nav className='nav-container'>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/project">Projects</a>
        <a href="socialprofiles">Social</a>
        
      </nav>
     
    </div>
  )
}

export default Navbar