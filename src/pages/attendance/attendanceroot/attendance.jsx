import { useLocation } from 'react-router-dom';
import './index.css';
import EAcard from '../../../components/cards/eacard/eacard';
import Layout from '../../../components/layout/layout';
import EmployeAttenList from '../../employattendanceListPage/employeAttenList';
import {attendancetable}from '../../../constants/jsonconstant';
import LeaveRequest from '../leaveRequest/leavepage';
import AddEmploye from '../../employee/addEmployee/addEmploye';

const Attendance=()=>{
    const location=useLocation();
    const showattendancecard=location.pathname==='/attendance';
    const showattendancelist=location.pathname==='/attendance/attendancelist';
    const showleavepage=location.pathname==='/attendance/leaverequest';
    const  showaddemp=location.pathname==="/attendance/addemployee";
    return(
        <Layout>
                {showattendancecard &&
                        <EAcard/>
                 }
                 {showattendancelist &&
                 <EmployeAttenList title='Attendances' tablecon={attendancetable}/>
                 }
                 {showleavepage && 
                 <LeaveRequest/>
                 }
                 {showaddemp &&
                    <AddEmploye/>
                 }
        </Layout>
    );
}

export default Attendance;