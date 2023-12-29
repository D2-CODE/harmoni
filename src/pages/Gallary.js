import React from 'react'
import './Gallary.css'
import img1 from '../componets/Asserts/images/gallery/1.image.jpg'
import img2 from '../componets/Asserts/images/gallery/2.image.jpg'
import img3 from '../componets/Asserts/images/gallery/3.image.jpg'
import img4 from '../componets/Asserts/images/gallery/4.image.jpg'
import img5 from '../componets/Asserts/images/gallery/5.image.jpg'
import img6 from '../componets/Asserts/images/gallery/6.image.jpg'
import img7 from '../componets/Asserts/images/gallery/7.image.jpg'
import img8 from '../componets/Asserts/images/gallery/8.image.jpg'


const Gallary = () => {
    return (
        <>
            <div className='gallary-hero'>
                <p>Harmoni Events</p>
                <h1>Harmoni</h1>
                <h2>Gallary</h2>
                <ul><li>Home</li>|<li>HarmoniGallary</li></ul>
            </div>
            <div className='map-title w-100 d-flex'>
                <div><p>-----</p></div>
                <div> <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i></div>
                <div><p>Our Gallary</p></div>
                <div><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i></div>
                <div><p>-----</p></div>

            </div>
            <div className='gallary-card'>
                <div className='card-section container  w-100'>
                    <div class="row row-cols-auto row-cols-md-2">
                        <div className='col collom'>
                            <div className='card'>
                                <img src={img1} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img2} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img3} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img4} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src={img5} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img6} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img7} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={img8} alt='img 1' />
                                <div className='card-title-overlay w-100'>
                                    <div>
                                        <h4>Hi there!</h4>
                                        <p>Shello there</p>
                                    </div>
                                    <div className='icon'><i class="fa-solid fa-info"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map w-100'>
                <div className='map-title1 w-100 d-flex'>

                    <div> <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i></div>
                    <div><p>Your Location</p></div>
                    <div><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i></div>

                </div>
                <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6316852204295!2d72.50929727516497!3d23.037291879163472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sTop%20App%20%26%20Web%20Development%20company%20in%20ahmedabad.%20Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2C%20UI%2FUx!5e0!3m2!1sgu!2sin!4v1701165221210!5m2!1sgu!2sin'} height='450' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' title='map'></iframe>
            </div>
            <div className='special-offer'>
                <h1>30%Off in the jun~july for Birthday Event</h1>
                <button>Make An Event Now</button>
            </div>
        </>
    )
}

export default Gallary