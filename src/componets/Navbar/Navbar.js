import React from 'react'
import logo from '../Asserts/images/2.site-logo.png'
import dArro from '../Asserts/images/1.down-arrow.png'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='NavBar'>
            <div className='Nav-logo'>
                <img src={logo} />
            </div>
            <ul className='Nav-menu'>
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/events'>Events</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/gallary'>Gallary</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Contact</Link></li>
            </ul>
            <div className='Nav-login'>
                <Link to='/signin'><button>
                    <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
                    Sign In <img src={dArro} /></button></Link>

            </div>
        </div>
    )
}

export default Navbar
