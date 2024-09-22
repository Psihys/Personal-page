import React from 'react'

const NavListItem = ({item}) => {
  return (
        <li className='navigation-list'>
            <a className='navigation-link' href='#'>
                <i className={`bi ${item.icons}`}></i>
                <span className='navName'>{item.name}</span>
            </a>
        </li>
  )
}

export default NavListItem