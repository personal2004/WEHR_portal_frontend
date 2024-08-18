import Layout from '../../components/layout/layout';
import { useLocation } from 'react-router-dom';
import './index.css';
import EAcard from '../../components/cards/eacard/eacard';
import EmployeList from '../../components/attendanceList/EmployeList';
import AddEmploye from '../../components/addEmployee/addEmploye';


const Employee=()=>{
     const location=useLocation();
     const showmeployeepage=location.pathname==='/employee';
     const showemployelist=location.pathname==='/employee/employeelist';
     const showaddemployepage=location.pathname==='/employee/addemployee';
    return(    
        <Layout>
            {showmeployeepage &&
                    <EAcard/>
            }
            {showemployelist &&  
                 <EmployeList/>
           }
           {showaddemployepage &&
                <AddEmploye/>
        }
        </Layout>    
    );
}
export default Employee;