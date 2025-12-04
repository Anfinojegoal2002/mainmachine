import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [type, setType] = useState("hi");
  return (
    <div>
      <div className='Contact'>
        <h2>Contact Us</h2>
      
        <p>Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs</p>

      </div>
      <div className='Containers'>
       <div className="contact-container">
      <div className="contact-type">
        <label className="radio-option">
          <input
            type="radio"
            name="type"
            checked={type === "hi"}
            onChange={() => setType("hi")}
          />
          <span className="custom-radio"></span>
          Say Hi
        </label>

        <label className="radio-option">
          <input
            type="radio"
            name="type"
            checked={type === "quote"}
            onChange={() => setType("quote")}
          />
          <span className="custom-radio"></span>
          Get a Quote
        </label>
      </div>

      <form className="form">
        <label>Name</label>
        <input type="text" placeholder="Name" />

        <label>Email*</label>
        <input type="email" placeholder="Email" required />

        <label>Message*</label>
        <textarea placeholder="Message" required></textarea>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
    <div className='right-image'>
          <img className='imge' src="src/assets/Mask group.png" alt="deded" />
    </div>
    </div>
      
    </div>
  )
}

export default Contact
