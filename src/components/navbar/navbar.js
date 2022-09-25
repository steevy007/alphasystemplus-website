import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
  
    const handleNavbarStateChange = () => {
        setOpenNavbar(!openNavbar);
    }
    
    return (
        <>
            <nav>
                <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>

                <div>
                    <ul id='navbar' className={openNavbar ? '#navbar active' : '#navbar'}>
                        <li className='nav-item'><Link
                            to="home" className={`nav-links `} spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Home</Link></li>
                        <li className='nav-item'><Link
                            to="about" className={`nav-links`} spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >About</Link></li>
                        <li className='nav-item'><Link
                            to="service" className={`nav-links `} spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Service</Link></li>
                        <li className='nav-item'><Link
                            to="contact" className={`nav-links `} spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Contact</Link></li>
                    </ul>
                </div>

                <div id='mobile' onClick={handleNavbarStateChange}>
                    <i id='bar' className={openNavbar === false ? 'fas fa-bars' : 'fas fa-times'} ></i>
                </div>
            </nav>

        </>
    )
}

export default Navbar