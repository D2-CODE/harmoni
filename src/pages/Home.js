import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import people from '../componets/Asserts/people.png'
import Hero from '../componets/Hero/Hero'
import google from '../componets/Asserts/google.png'
import slack from '../componets/Asserts/slack.png'
import atlassian from '../componets/Asserts/atlassian.png'
import dropbox from '../componets/Asserts/dropbox.png'
import shopify from '../componets/Asserts/shopify.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <Hero />
            <div className='second'>
                <div className='second-icons'>
                    <img src={google}></img>
                    <img src={slack}></img>
                    <img src={atlassian}></img>
                    <img src={dropbox}></img>
                    <img src={shopify}></img>
                </div>
                <div className='second-box'>
                    <div className='box1'>
                        <div className='box-title'>
                            <h3>What is Harmoni Event</h3>
                        </div>
                        <div className='box-pragraph'>
                            <p>  We are so opinion friends me message as delight. whole front do of plate heard oh ought.His defective nor convinced residence own. connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                        </div>
                    </div>
                    <div className='box2'>
                        <h1>Your Event will be beyond your Imagination</h1>
                        <h5>Explore the library</h5>
                    </div>
                    <div className='box3'>
                        <div className='box-conten'>
                            <h2>Chatbots</h2>
                            <h5>We so opinion friends me message as delight.whole front do of plate heard oh ought.</h5>
                        </div>
                        <div className='box-conten'>
                            <h2>Knowledgebase</h2>
                            <h5>At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.</h5>
                        </div>
                        <div className='box-conten'>
                            <h2>Education</h2>
                            <h5>At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.</h5>
                        </div>
                    </div>
                </div>
                <div className='second-end'>
                    <div className='end-title'>
                        <h1>Harmony Event Management firms & Wedding Planners is a group of creative mind who whould like to make wedding, birthdays & any kind of events courteous &a better place for our clients to celebrate importnt moments of their lives... </h1>
                    </div>
                    <div className='end-topics'>
                        <div className='topic'>
                            <div className='topic-title'>
                                <h4>Photography</h4>
                            </div>
                            <div className='topic-desc'>
                                <p>A Team of 3 talented Photographers are ready to snap the best moments of your ceromony</p>
                            </div>
                        </div>
                        <div className='topic'>
                            <div className='topic-title'>
                                <h4>Cinematography or Videography Service</h4>
                            </div>
                            <div className='topic-desc'><p>Creative full HD 1080P Video, a different scape of your ceromony</p></div>
                        </div>
                        <div className='topic'>
                            <div className='topic-title'>
                                <h4>Full venue Decoration Service</h4>
                            </div>
                            <div className='topic-desc'><p>
                                A blend of out-of-the-box ideas to decore your precious date
                            </p></div>
                        </div>
                        <div className='topic'>
                            <div className='topic-title'>
                                <h4>Home Decoration</h4>
                            </div>
                            <div className='topic-desc'><p>
                                just call us and get total event solution under one roof
                            </p></div>
                        </div>
                    </div>

                </div>
                <div className='notice'><p>Request Early Access to get Started</p></div>
                <div className='Early-request'>
                    <div>
                        <p>Request Early Access to get Started</p>
                        <h3>Register Today & start exploring the endless possibilities.</h3>
                    </div>
                    <button>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Home