import { useLocation } from 'react-router-dom';
import './index.css';
import EAcard from '../../../components/cards/eacard/eacard';
import AddEmploye from '../addEmployee/addEmploye';
import EmployeList from '../../employattendanceListPage/employeAttenList';
import {employeetable} from '../../../constants/jsonconstant';
const Employee=()=>{
     const location=useLocation();
     const showmeployeepage=location.pathname==='/employee';
     const showemployelist=location.pathname==='/employee/employeelist';
     const showaddemployepage=location.pathname==='/employee/addemployee';
    return(    
<>
            {showmeployeepage &&
                    <EAcard/>
            }
            {showemployelist &&  
                 <EmployeList title='Employee' tablecon={employeetable}/>
           }
           {showaddemployepage &&
                <AddEmploye/>
        }
</>  
    );
}
export default Employee;