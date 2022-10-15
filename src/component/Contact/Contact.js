import React from 'react'
import Navbar from "./Navbar"
import "./Contact.css"
const Contact = () => {
   const HandelContact = (e) =>
   {
    e.preventDefault();
    const Element =e.target.elements
    const Name = Element[0].value;
    const Email = Element[1].value;
    const Number = Element[2].value;
    const Message = Element[3].value;
    console.log(Name,Email,Number,Message);

    
   }
  return (
    <div className='contact-container'>
      <nav><Navbar/>

    </nav>
      
<div className='contact-header'>
<h1 class="text">
    Contact Hari here<i className="fa-duotone fa-hand-back-point-down"></i>
  </h1>
</div>


<form onSubmit={HandelContact}>
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