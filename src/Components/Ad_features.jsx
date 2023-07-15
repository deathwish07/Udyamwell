import React from 'react'

function Ad_features() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h2><b>{props.title}</b></h2>
                <p>{props.desc}</p>
                <button>{props.btn}</button>
            </div>
            <div className='about-image'>
                <img src={props.img} alt='' />
            </div>
        </div>
    )
}

export default Ad_features