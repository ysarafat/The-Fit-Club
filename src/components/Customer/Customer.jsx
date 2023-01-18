import React from 'react'
import { useRef } from 'react'
import './Customer.css'
import emailjs from '@emailjs/browser'

const Customer = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jq3dgwb', 'template_lu8rjr6', form.current, 'KF2a5PXL9xKx4j8no')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>

        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user-email" placeholder="Enter Your Email"/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Customer
