import React from 'react'
import "./LeftContainer.css"
import img1 from "../Images/Ellipse 84.svg"
import img2 from "../Images/Ellipse 85.svg"
import twitter from "../Images/twitter.svg"
import instagram from "../Images/instagram.svg"
import github from "../Images/github.png"
const LeftContainer = () => {
  return (
    <div className='left-container'>
      <div className='user-name-content'>
        <img className='img1' src={img1}></img>
        <img className='img2' src={img2}></img>
        <h3 className='user-name-container'>
          Hari's portfolio
        </h3>
      </div>
      <div className='header'>
        <h1>
          Be Creative,

        </h1>
        <br></br>
        <h1>Be Innovative</h1>
      </div>
      <div className='tech-position'>
        <p>
          Full Stack Developer: MERN-Stack DEV
        </p>
      </div>
      <div className='tech-position-details'>
        <p>
          I have to be able to communicate ideas to a wide range of stakeholders in both my own voice and in Sprout's. Communicating on social.
        </p>
      </div>
      <div className='portfolio-container'>
        <button className='btn-portfolio'> portfolio</button>
        <a href="https://drive.google.com/file/d/1X7i2bnBVZVMo0VFiW_qKUyk5Aq2XMed8/view?usp=drivesdk" className='download-here'>
          download resume here
        </a>
      </div>
      <div className='contact-link-container'>
        <a href="https://twitter.com/chiku_hari"><img src={twitter}></img></a>
        <a href="https://instagram.com/r.a.d.h.a_h.a.r.i_7?igshid=YmMyMTA2M2Y="><img src={instagram}></img></a>
        <a href='#'><img></img></a>
      </div>
    </div>
  )
}

export default LeftContainer