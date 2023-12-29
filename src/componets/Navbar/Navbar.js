import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Asserts/images/2.site-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import dArro from '../Asserts/images/1.down-arrow.png'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt='img' />
            </div>
            <div className={showMenu ? 'nav-links mobile-menu-link' : 'nav-links'}>
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/events'>Events</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/gallary'>Gallary</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Contact</Link></li>
                </ul>
            </div>

            <div className='signinbtn'>
                <Link to='/signin'><button>
                    <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
                    SignIn<img src={dArro} alt='img' /></button></Link>

            </div>
            <div className='hamburgur' onClick={() => setShowMenu(!showMenu)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar













// import React, { useState } from 'react'
// import logo from '../Asserts/images/2.site-logo.png'
// import dArro from '../Asserts/images/1.down-arrow.png'
// import '../Navbar/Navbar.css'
// import { Link } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'


// const Navbar = () => {

//     const [showMediaIcons, setShowMediaIcons] = useState(false);

//     return (

//         // logosection start
//         <div className='NavBar'>
//             <div className='Nav-logo'>
//                 <img src={logo} alt='img' />
//             </div>
//             <div className={'menu'}>
//                 <ul className='Nav-menu'>
//                     <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></li>
//                     <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link></li>
//                     <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/events'>Events</Link></li>
//                     <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/gallary'>Gallary</Link></li>
//                     <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Contact</Link></li>
//                 </ul>
//             </div>
//             <div className='Nav-login'>
//                 <Link to='/signin'><button>
//                     <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
//                     Sign In <img src={dArro} alt='img' /></button></Link>

//             </div>
//             <div className="hamburger-menu">
//                 <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//                     <GiHamburgerMenu />
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Navbar
