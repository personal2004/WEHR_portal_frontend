import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import SideBar from '../sidebar/sidebar';
import './layout.css';
import icons from '../../constants/icons';
import { useState } from 'react';

const Layout=({children})=>{
    const [menucontrol,setmenucontrol]=useState(false);
    const location=useLocation();
    const issigninpage=location.pathname==='/';
    return(
        issigninpage?<div>
            {children}
        </div>:
        <div className='layout'>
            <div className={menucontrol?"displayMenu_bar":'notdisplay'} onClick={(e)=>{setmenucontrol(!menucontrol)}}>{icons.menu}</div>
            <div  className={menucontrol ?'screenview':"layout_sidebar"} onClick={(e)=>{setmenucontrol(!menucontrol)}}><SideBar/></div>
            <div className='navbar_layout'>
                <div className='layout_navbar'><Navbar/></div>
                <div className='layout_content'>{children}</div>
            </div>
        </div>
    );
}
export default Layout;