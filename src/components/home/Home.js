import React from 'react'
import { Link } from 'react-scroll'
import './home.css'
const Home = () => {
  return (
    <div className='section' id='home' >
      <div className='overlay'></div>
      <div className='home-content'>
        <div>
          <h1>We Help To Grow <br /> Your Buisness</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <Link to="service" className={`nav-links `} spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Our Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Home