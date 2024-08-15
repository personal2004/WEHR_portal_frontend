import "./sidebar.css";
import icons from "../../icons";
const SideBar=()=>{
    return(
        <div className="sidebar">
        <h3>WeHR</h3>
        <div className="sidebar_content"> 
                <div className="menu-section">                  
                        <h5><span>{icons.dashboard}</span>Dashboard</h5>
                        <h5><span>{icons.employee}</span>Employee</h5>
                        <h5><span>{icons.attendance}</span>Attendance</h5>
                        <h5><span>{icons.payroll}</span>PayRoll</h5>
                        <h5><span>{icons.task}</span>Task</h5>
                        <h5><span>{icons.announcement}</span>Announcement</h5> 
                </div>
                <h4>OTHER</h4>
                <div className="content">
                        <h5><span>{icons.support}</span>Support</h5>
                        <h5><span>{icons.settings}</span>Settings</h5>
                </div>
        </div>
        </div>
    );
}

export default SideBar;