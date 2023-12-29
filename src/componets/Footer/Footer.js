import React from 'react'
import './Footer.css'
import rectlogo from '../../logo.svg'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-title'>
                    <h1><span>Do you want to step in to the</span><br></br> future of Your upcomming Event</h1>
                    <button>Request Early Access</button>
                </div>
                <div className='footer-menu'>
                    <div className='menu-list'>
                        <img src={rectlogo} alt='img'></img>
                        <p>Crechterwood K12 182 DK Alknjkcb,<br />All Right Reserved</p>
                        <div className='sub-menu'>
                            <h6>Get in Touch</h6>
                            <p>Crechterwood K12 182 DK Alknjkcb<br />
                                085-132567<br />info@payment.net</p>
                        </div>

                    </div>
                    <div className='menu-list'>
                        <h6>Links</h6>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </div>
                    <div className='menu-list'>
                        <h6>Company</h6>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </div>

                </div>
                <h5>@2023 DharmeshDahaniya.All Rights Reserved</h5>
            </div>
        </>
    )
}

export default Footer