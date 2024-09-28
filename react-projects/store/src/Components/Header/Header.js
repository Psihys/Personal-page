import { Link, Routes } from 'react-router-dom'
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import './Header.css' 
import React from 'react'


const Header = () => {
  return (
    <div  className='header'>
        <div className='header-logo'>
        <Link to={Routes.HOME}>
          <img className='logo-image' src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
        </Link>
      </div>
      
        <div className='header-info'>
          <div className='header-user'>
            <div className='header-avatar'></div>
            <div className='header-username'>Guest</div>
          </div>
          
          <form className='form'>

             <div className='header-icons'>
              
            </div>

            <div className='header-input'>
              <input type='search' name='search' placeholder='Search for something?' autoComplete='off' onChange={() => { }} value={''}>
              
              </input>
            </div>

            {false && <div className='header-box'></div>}
          </form>

          <div className='account'>
            <Link to={Routes.HOME} className='favorite'>
              <FaRegHeart  className='favorite-icon'/>
            </Link>
          
            <Link to={Routes.CART} className='carts'>
              <IoBagOutline className='car-icon' />
              <span className='count'> 2 </span>
            </Link>
          </div>
          </div>
       
    </div>
  )
}

export default Header