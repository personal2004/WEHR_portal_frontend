import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import SideBar from '../sidebar/sidebar';
import './layout.css';

const Layout=({children})=>{
    const location=useLocation();
    const issigninpage=location.pathname==='/'
    return(
        issigninpage?<div>
            {children}
        </div>:
        <div className='layout'>
            <div className='layout_sidebar'><SideBar/></div>
            <div className='layout_navbar'><Navbar/></div>
           {children}
        </div>
    );
}
export default Layout;