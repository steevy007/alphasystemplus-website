import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Service from '../service/Service'
import './landing.css'

const Landing = () => {
    return (
        <>
            <div id='landing'>
                <Home />
                <About />
                <Service />
                <Contact />
            </div>
        </>
    )
}

export default Landing