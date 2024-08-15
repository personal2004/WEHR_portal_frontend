import './navbar.css';
import React from 'react';
import icons from '../../constants/icons';
import { profilepic } from '../../constants/images';

const Navbar=()=> {
  return (
    <>
    <nav className="navbar">
        <div className='searchbar'>
          <input type='text' placeholder='Search Employee'></input>
          <button className='search_icon'>{icons.search}</button> 
        </div>
        <div className='navbar_content'>
          <div className='notification'>{icons.notification}</div>
          <div className='message'>{icons.message}</div>
          <img src={profilepic} alt='profile_picture' className='profile_picture'/>
          <h3>Admirra John</h3> 
          <span>{icons.downarrow}</span>       
        </div>
    </nav>
    </>
  );
}

export default Navbar;
