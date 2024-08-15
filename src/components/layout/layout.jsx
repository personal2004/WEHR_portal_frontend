import Navbar from '../navbar/navbar';
import SideBar from '../sidebar/sidebar';
import './layout.css';

const Layout=({children})=>{
    return(
        <div className='layout'>
            <div className='layout_sidebar'><SideBar/></div>
            <div className='layout_navbar'><Navbar/></div>
            {children}
        </div>
    );
}
export default Layout