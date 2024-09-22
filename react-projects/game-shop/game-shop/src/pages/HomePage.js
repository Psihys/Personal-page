import React from 'react';
import './home.css';
import SideMenu from '../components/SideMenu';


const HomePage = () => {
  return (
    <main className='home'>
    <SideMenu />  
    <div className='banner'></div>
    </main>
  )
}

export default HomePage