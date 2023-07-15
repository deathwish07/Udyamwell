import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h3>Newsletter</h3>
        <h4>Stay updated with our latest features</h4>
        <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com'/>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Contact