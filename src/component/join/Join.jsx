import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_j6zxme7', 'template_a45cg3b', form.current, '9A8E1Iq3YPZBQOb2B')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className='join' id='join-us'>
        <div className="left-j">
          <hr />
            <div>
            <span className='stroke-text'>Ready to</span>
            <span style={{color:'white'}}> level up</span>
            </div>
            <div>
            <span style={{color:'white'}}>your body</span>
            <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className="right-j">
          <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter Your Email Address' />
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join
