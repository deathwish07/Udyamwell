import React from 'react'
import logo from '../images/logo.png'

function Footer() {
    return (
        <div className='contact'>
            <div className='footer-wrapper'>
                <div className='footer-section-one'>
                    <div className='footer-logo-container'>
                        <img src={logo} alt='' />
                    </div>
                    <div>
                        <p className='details'>UdyamWell is a true partner that guides you on your entrepreneurial journey and stays with you in every step of the
                            way to assist you in overcoming challenges and also in reaching new heights.</p>
                    </div>
                </div>
                <div className='footer-section-two'>
                    <div className='footer-section-columns'>
                        <span>Home</span>
                        <span>About</span>
                        <span>Courses</span>
                        <span>Blog</span>
                        <span>Services</span>
                        <span>Contact</span>
                    </div>
                    <div className='footer-section-columns'>
                        <span>Catalyst Building, IIT Mandi, Himachal Pradesh - 175005</span>
                        <span>+91 8679625300</span>
                        <span>admin@udyamwell.com</span>
                    </div>
                    <div className='footer-section-columns'>
                        <span>Terms & conditions</span>
                        <span>Privacy policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer