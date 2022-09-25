import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='section' id='about'>
      <div data-aos="zoom-in">
        <hr class="hr-text" data-content="A Propos" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div data-aos="zoom-in">
        <div className='about-1'>
          <hr class="hr-text" data-content="Notre Mission" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          </p>
        </div>
        <div className='about-2'>
          <hr class="hr-text" data-content="Notre Visons" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className='about-3'>
          <hr class="hr-text" data-content="Nos Valeurs" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About