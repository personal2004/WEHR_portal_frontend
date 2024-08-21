import { useLocation } from 'react-router-dom';
import './index.css';
import EAcard from '../../../components/cards/eacard/eacard';
import Layout from '../../../components/layout/layout';
import EmployeAttenList from '../../employattendanceListPage/employeAttenList';
import {attendancetable}from '../../../constants/jsonconstant';

const Attendance=()=>{

    const location=useLocation();
    const showattendancecard=location.pathname==='/attendance';
    const showattendancelist=location.pathname==='/attendance/attendancelist'
    return(
        <Layout>
                {showattendancecard &&
                        <EAcard/>
                 }
                 {showattendancelist &&
                 <EmployeAttenList title='Attendances' tablecon={attendancetable}/>}
        </Layout>

    );
}

export default Attendance;