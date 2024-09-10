import './navbar.css';
import React, { useEffect, useState } from 'react';
import icons from '../../constants/icons';
import { profilepic } from '../../constants/images';
import { useLocation } from 'react-router-dom';
const Navbar=()=> {
  const [onlinestatus,setonlinestatus]=useState('');
  const location=useLocation();
  const showsearchbar=location.pathname==='/dashboard';
  const isaddemp=location.pathname==='/employee/addemployee';
  const isleaverequest=location.pathname==='/attendance/leaverequest';

  const handlestatus=()=>{
    if(navigator.onLine){
      setonlinestatus('Online');
    }else{
      setonlinestatus('Offline');
    }
  };

useEffect(()=>{
  handlestatus();
},[onlinestatus])

  return (
    <>
    <nav className="navbar">
        <div className='navbar_first_child'>
            {showsearchbar && <div className='searchbar'>
                <button className='search_icon'>{icons.search}</button> 
                <input className='search_bar'type='text' placeholder='Search Employee'></input>
            </div>}
            {isaddemp && <h3 className='addemp_nav_header'>Employee</h3>} 
            {isleaverequest && <h3 className='leave_nav_header'>Leave Request</h3>}
        </div>
        <div className='navbar_content'>
          <div className='notification'>{icons.notification}</div>
          <div className='message'>{icons.message}</div>
          <img src={profilepic} alt='profile_picture' className='profile_picture'/>
          <h3  onMouseOver={handlestatus} data-toggle="tooltip" title={`User is ${onlinestatus}`} data-placement="bottom">Admirra John</h3> 
          <span>{icons.downarrow}</span>       
        </div>
    </nav>
    </>
  );
}

export default Navbar;
