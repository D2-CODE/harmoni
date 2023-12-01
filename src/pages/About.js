import React from 'react'
import './About.css'
import c_banner from '../componets/Asserts/images/about/company-banner.png'

const About = () => {
    return (
        <>
            <div className='about-hero'>
                <p>All You Need To <br />know </p>
                <h1>About</h1>
                <h2>Harmoni</h2>
                <ul><li>Home</li>|<li>Aboutus</li></ul>
            </div>
            <div className='about-desc'>
                <div className='about-ms'>
                    <div className='about-ms-title'>
                        <p>We are Harmoni</p>
                        <h1>No.1 Events Management</h1>
                        <p>get started!</p>
                    </div>
                    <div className='about-ms-des'>
                        <div className='mission'>
                            <h1>our mission</h1>
                            <p>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit</p>
                            <h4>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</h4>
                        </div>
                        <div>
                            <h1>our mission</h1>
                            <p>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit</p>
                            <h4>Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</h4>
                        </div>
                    </div>
                </div>
                <div className='about-award'>
                    <div className='award-pic'>
                        <img src={c_banner} alt='img' />
                    </div>
                    <div className='award-desc'>
                        <p> Harmoni awards</p>
                        <h1>Our Winning awards</h1>
                        <div className='award'>
                            <h1>AUG2015</h1>
                            <div className='award-detail'>
                                <h1>1st Place for Unique Events 2018</h1>
                                <p>lorem ipusm dolor sit amet,consectuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='award'>
                            <h1>SEP2015</h1>
                            <div className='award-detail'>
                                <h1>2nd Place for Unique Events 2018</h1>
                                <p>lorem ipusm dolor sit amet,consectuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='award'>
                            <h1>NOV2015</h1>
                            <div className='award-detail'>
                                <h1>3rd Place for Unique Events 2018</h1>
                                <p>lorem ipusm dolor sit amet,consectuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        {/* <div className='award'>
                            <h1>DEC2015</h1>
                            <div className='award-detail'>
                                <h1>4th Place for Unique Events 2018</h1>
                                <p>lorem ipusm dolor sit amet,consectuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                    <div className='box'>
                        Study With us
                        <p>Visit our word class facility for south African Scientist and Spectrum</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About