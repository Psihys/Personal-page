import { Link, Routes } from 'react-router-dom'
import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
      <div>
      <Link to={Routes.HOME}>
          <img src='logo' alt=' ' >
          
          </img>
      </Link>
      </div>

      <div className='footer-policy'> 
        Developed by {""}
        <a href=' ' target='blank' > </a>
      </div>

      <div className='footer-socials'>

      </div>
    </section>
  )
}

export default Footer