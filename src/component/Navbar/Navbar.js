import React from 'react'
import "./Navbar.css"
import icon from "../Images/i-icon.svg"

const Navbar = () => {
  return (
    <div>
       <nav className='navbar-container'>
        <a href="">Home</a>
        <a href="/about">About</a>
        <a href="/project">Projects</a>
        <a href="contact">contact</a>
        <a href="socialprofiles">Social</a>
        <a className='navbar-container--icon'><img src={icon}></img></a>
      </nav>
     
    </div>
  )
}

export default Navbar