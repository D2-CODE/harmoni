import React from 'react'
import './Events.css'
import img1 from '../componets/Asserts/images/event/3.event-grid.jpg'
import img2 from '../componets/Asserts/images/event/4.event-grid.jpg'
import img3 from '../componets/Asserts/images/event/5.event-grid.jpg'
import img4 from '../componets/Asserts/images/event/7.event-grid.jpg'

const Events = () => {
    return (
        <>
            <div className='contact-hero'>
                <h3>Get started now</h3>
                <h1><span>Harmoni</span>Events</h1>
                <ul><li>HOme</li>|<li>Events</li></ul>
            </div>
            <div className='category'>
                <ul className='d-flex'>
                    <li>category</li>
                    <li>Wedding</li>
                    <li>Birthday party</li>
                    <li>sports Event</li>
                </ul>
            </div>
            <div className='card-sectio'>
                <div className='container'>
                    <div className='row row-cols-3'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-img-top'>
                                    <img src={img1} alt='hii' />
                                </div>
                                <div className='card-title'>
                                    <p className='text-center'>Wedding</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-img-top'>
                                    <img src={img2} alt='hii' />
                                </div>
                                <div className='card-title'>
                                    <p className='text-center'>Wedding</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-img-top'>
                                    <img src={img3} alt='HIUIUI' />
                                </div>
                                <div className='card-title'>
                                    <p className='text-center'>Birthday party</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-img-top'>
                                    <img src={img4} alt='hiii' />
                                </div>
                                <div className='card-title'>
                                    <p className='text-center'>sports event</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events