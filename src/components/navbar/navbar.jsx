import './navbar.css';
import React from 'react';
import icons from '../../constants/icons';
import { profilepic } from '../../constants/images';
import { useLocation } from 'react-router-dom';
const Navbar=()=> {
  const location=useLocation();
  const showsearchbar=location.pathname==='/dashboard'
  const isaddemp=location.pathname==='/employee/addemployee'
  const isleaverequest=location.pathname==='/attendance/leaverequest'
  return (
    <>
    <nav className="navbar">
        {showsearchbar && <div className='searchbar'>
          <input className='search_bar'type='text' placeholder='Search Employee'></input>
          <button className='search_icon'>{icons.search}</button> 
        </div>}
        {
          isaddemp && <h3 className='addemp_nav_header'>Employee</h3>
        }
        {isleaverequest && <h3 className='leave_nav_header'>Leave Request</h3>}
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
