import React, { useState } from 'react'
import './sideMenu.css'
import NavListData from '../data/NavListData'
import NavListItem from './NavListItem'

const SideMenu = () => {
    const [data, setData] = useState(NavListData);

    

  return (
    <div className='sideMenu'>
        <a href='#' className='logo'>
            <i className="bi bi-controller"></i>
            <span className='brand'> Just play</span>
        </a>

        <ul className='navigation'>
            {
            data.map(item =>
                (
                   <NavListItem key={item._id} item={item} /> 
                ))
            };
      
        </ul>

        
    </div>
  )
}

export default SideMenu