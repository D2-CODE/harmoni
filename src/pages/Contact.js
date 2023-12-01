import React from 'react'
import './Contact.css'
import hadset from '../componets/Asserts/images/Headsets_.jpeg'

const Contact = () => {
    return (
        <>
            <div className='contact-hero'>
                <h3>Contact us now</h3>
                <h1><span>KEEP</span> in touch</h1>
                <ul><li>HOme</li>|<li>ContactUs</li></ul>
            </div>
            <div className='contact-form d-flex'>
                <img className='' src={hadset} alt='img' />
                <div className='contact w-50'>
                    <div className='icon'> <i class="fa-solid fa-lock"></i>
                    </div>
                    <h3>Contact Us</h3>
                    <form className='form w-100'>
                        <div className='m-5'>
                            <input type="text" placeholder="Name*" className='form-control form-control-lg m-3' required='true' />
                            <input class="form-control form-control-lg m-3" type="email" placeholder="Email*" aria-label=".form-control-lg example"></input>
                            <input class="form-control form-control-lg m-3" type="text" placeholder="Country*" aria-label="default input example"></input>
                            <input class="form-control form-control-lg m-3" type="text" placeholder="Phone Number*" aria-label=".form-control-sm example"></input>
                            <input class="form-control form-control-lg m-3" type="text" placeholder="Password*" aria-label=".form-control-sm example"></input>
                            <button type="button" class="btn btn-primary btn-block w-100 m-3">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='map w-100'>
                <div className='map-title d-flex'>
                    <span><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i></span>
                    <p>Your Location</p>
                    <span><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i></span>
                </div>
                <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6316852204295!2d72.50929727516497!3d23.037291879163472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sTop%20App%20%26%20Web%20Development%20company%20in%20ahmedabad.%20Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2C%20UI%2FUx!5e0!3m2!1sgu!2sin!4v1701165221210!5m2!1sgu!2sin'} height='450' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' title='map'></iframe>
            </div>
        </>
    )
}

export default Contact