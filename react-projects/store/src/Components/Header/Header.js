import { Link, Routes } from 'react-router-dom'
import './Header.css'
import React from 'react'


const Header = () => {
  return (
    <div  className='header'>
        <div className='header-logo'>
            <Link to={Routes.HOME}>
            <img src='logo' alt=' '>
            
            </img>
            </Link>
        </div>
    </div>
  )
}

export default Header