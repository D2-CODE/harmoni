import React from 'react'
import img1 from '../componets/Asserts/images/slider/slider-bg2.jpg'
import './Event36.css'


const Event36 = () => {
    return (
        <div className='card-section2'>
            <div className='card container' style={{ borderRadius: 0, overflow: 'hidden', margin: 0, display: 'flex', justifyContent: 'left' }
            }>
                <div className='card-img-top'><img style={{ borderRadius: 0, overflow: 'hidden' }} alt='img ' src={img1} /></div>
                <div className='card-body' style={{ justifyContent: 'left', alignItems: 'start' }}>
                    <div className='card-title' style={{ height: '40px', padding: '10px', width: '30%', textAlign: 'left', display: 'flex', justifyContent: 'left' }}>
                        <h4 style={{ fontSize: '1rem', margin: 0, padding: 0 }}>Wedding Party</h4>
                    </div>
                    <div className='card-title' style={{ height: '40px', padding: '10px', width: '100%', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '1rem', margin: 0, padding: 0 }}>10/05/2023</h4>
                    </div>
                    <div className='card-title' style={{ height: '40px', padding: '10px', width: '30%', textAlign: 'left' }}>
                        <h4 style={{ fontSize: '1rem', margin: 0, padding: 0 }}>Ticikets from $52</h4>
                    </div>
                    <p className='card-text' style={{ padding: 0 }}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    <div>
                        <div className='card-text' style={{ padding: 0 }}>
                            <i class="fa-regular fa-clock"></i>
                            <p style={{ margin: 0, padding: 0 }}>start 20:00pm-22:00pm</p>
                        </div>
                        <div className='card-text' style={{ padding: 0 }}>
                            <i class="fa-solid fa-location-dot"></i>
                            <p style={{ margin: 0, padding: 0 }}>Good morning all of you ... you can noin the wedding</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <div className='btn  btn-outline-primary m-2'>Book Event</div>
                    </div>
                </div>
            </div >
            {/* <div className='card'>
                <div className='card-img-top' style={{ height: 400, backgroundPosition: 'top' }}>
                    <img src={img1} alt='hii' style={{ height: 400, position: 'top' }} />
                </div>
                <div className='card-body'>
                    <div className='card-title text-center'>Wedding party</div>
                    <div className='card-title text-center'>
                        10/05/2023
                    </div>
                    <div className='card-title'>
                        <p>Ticikets from $52</p>
                    </div>
                    <div>
                        <div className='card-text'>
                            <i class="fa-regular fa-clock"></i>
                            <p>start 20:00pm-22:00pm</p>
                        </div>
                        <div className='card-text'>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Good morning all of you ... you can noin the wedding</p>
                        </div>
                    </div>
                    <div className='btn btn-primary m-2'>Viwe in detail</div>
                </div>
            </div> */}
        </div >
    )
}

export default Event36