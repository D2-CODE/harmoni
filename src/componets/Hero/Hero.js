import React from 'react'
import people from '../Asserts/people.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h1>
                    One Stop Event Planner
                </h1>
                <p>
                    yet bed any for travelling assistance indulgence unpleasing.Not
                    thoughts all exercise blessing. indulgence way everything joy alteration boisterous the attechment. Party we years to order allow
                    asked of.
                </p>
                <h5>Every Event should be Perfect</h5>

                <div className='Email-box'>
                    <input type='email' placeholder='Your Email Address'></input>
                    <button>Get<br />Started</button>
                </div>
                <div className='People'>
                    <img src={people}></img>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='hero-right'>
            </div>
        </div>
    )
}

export default Hero