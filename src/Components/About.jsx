import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.img} alt=''/>
        </div>
        <div className='about-text'>
            <h2><b>{props.title}</b></h2>
            <p>{props.desc}</p>
            <button>{props.btn}</button>
        </div>
    </div>
  )
}

export default About