import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id="main">
        <Navbar/>
        <div className='name'>
            <h1><span>PARTNER IN YOUR </span>BUSINESS JOURNEY</h1>
            <p className='details'>UdyamWell: A Platform for you to make your entrepreneurial dreams come true.</p>
            <a href='#' className='cv-btn'>Get started</a>
        </div>
    </div>
  )
}

export default Header