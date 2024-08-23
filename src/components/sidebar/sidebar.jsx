import "./sidebar.css";
import icons from "../../constants/icons";
import { NavLink } from "react-router-dom";
const SideBar=()=>{
    return(
        <div className="sidebar">
        <h3>WeHR</h3>
        <div className="sidebar_content"> 
                <div className="menu-section">  
                    <NavLink to="/dashboard" activeClassName="active"><span>{icons.dashboard}</span>Dashboard</NavLink>  
                    <NavLink to="/employee" activeClassName="active"><span>{icons.employee}</span>Employee</NavLink>  
                    <NavLink to="/attendance" activeClassName="active"><span>{icons.attendance}</span>Attendance</NavLink>  
                    <NavLink to="/dumy" activeClassName="active"><span>{icons.payroll}</span>PayRoll</NavLink>  
                    <NavLink to="/dmmy" activeClassName="active"><span>{icons.task}</span>Task</NavLink>  
                    <NavLink to="/ummy" activeClassName="active"><span>{icons.announcement}</span>Announcement</NavLink>
                </div>
                <h4>OTHER</h4>
                <div className="content">
                    <NavLink to="/dumm" activeClassName="active"><span>{icons.support}</span>Support</NavLink>  
                    <NavLink to="/dummy" activeClassName="active"><span>{icons.settings}</span>Settings</NavLink> 
                </div>
        </div>
        </div>
    );
}

export default SideBar;