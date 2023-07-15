import React from 'react'
import profilepic from '../images/Profile.jpg'

function Testimonials() {
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Testimonial</p>
                <h1 className='primary-heading'>What they are saying</h1>
                <p className='primary-text'>
                    Here are some testimonies by our satisfied customers.
                </p>
            </div>
            <div className='a-container'>
                <div className='a-box'>
                    <img src={profilepic} alt='' className='a-b-img' />
                    <p className='s-b-text'>
                        Udyamwell has really helped me build my business to great heights. I will always be
                        grateful to them.
                    </p>
                </div>
                <div className='a-box'>
                    <img src={profilepic} alt='' className='a-b-img' />
                    <p className='s-b-text'>
                        Udyamwell is the best service to help young entrepreneurs achieve their dreams.
                    </p>
                </div>
                <div className='a-box'>
                    <img src={profilepic} alt='' className='a-b-img' />
                    <p className='s-b-text'>
                        Udyamwell helped me build my business to where it is now.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials