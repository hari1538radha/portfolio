import React from 'react'
import Navbar from "./Navbar"
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>
      <nav><Navbar/>

    </nav>
      
<div className='contact-header'>
<h1>
    Contact Hari here<i className="fa-duotone fa-hand-back-point-down"></i>
  </h1>
</div>


<form>
      <div className='login-container'>
    
          <input type="text" placeholder='Enter your name'required={true}>
          </input>
          <input type="email" placeholder='Enter your Email'required={true}>
          </input>
          <input type="number" placeholder='Enter you contact number'required={true}>
          </input>
          <input type="text" placeholder='Message'required={true}>
          </input>
          <button className='submit-btn'>SUBMIT</button>
   
      </div>
      </form>
    </div>
  )
}

export default Contact