import React from 'react'
import "./Rightcontainer.css"
import Navbar from '../Navbar/Navbar'
import line from "../Images/line.svg"
import profile from "../Images/profile.JPEG"
const RightContainer = () => {
  return (
    <div className='right-container'>
      <nav> <Navbar /></nav>
      <div className='line-container'>
        <img src={line}></img>
        <img className='profile-pic' src={profile}></img>
        <div className='profile-header'>
          MERN-Developer
        </div>
      </div>

    </div>
  )
}

export default RightContainer
