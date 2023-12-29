import React, { useState } from 'react'
import logo from '../Asserts/images/2.site-logo.png'
import dArro from '../Asserts/images/1.down-arrow.png'
// import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
// import './NavbarMenu.css'


const NavbarMenu = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <nav className='main-nav' style={{ backgroundColor: 'blue' }}>
            {/* 1st logo part */}
            <div className='logo'>
                <img src={logo} alt='img' />
            </div>
            {/* 2nd menu part */}

            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/events'>Events</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/gallary'>Gallary</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Contact</Link></li>
                </ul>
            </div>

            {/* signIn button */}


            <div className='SignInBtn'>
                <Link to='/signin'><button>
                    <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
                    Sign In <img src={dArro} alt='img' /></button></Link>
            </div>

            {/* hamburget menu start  */}
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>

            </div>
        </nav>
    )
}

export default NavbarMenu