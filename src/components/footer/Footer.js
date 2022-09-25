import React from 'react'
import { Link } from 'react-scroll'
import './footer.css'
const Footer = () => {
    const date=new Date();
    return (
        <div id='footer'>
            <div className='social'>
                <a href=''><i className='fab fa-instagram'></i></a>
                <a href=''><i className='fab fa-snapchat'></i></a>
                <a href=''><i className='fab fa-twitter'></i></a>
                <a href=''><i className='fab fa-facebook'></i></a>
            </div>
            <ul className='list'>
                <li className='nav-item'>
                    <Link className='nav-links' to="home" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="about" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >About</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="service" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Service</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="contact" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Contact</Link>
                </li>
            </ul>

            <p className='copyright'>
                Alphasystemplus @ {date.getFullYear()}
            </p>
        </div>
    )
}

export default Footer