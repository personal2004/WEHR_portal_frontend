import './index.css';
import icons from '../../constants/icons';
import Eatable from '../../components/eatable/table';
import { useNavigate } from 'react-router-dom';
const EmployeList=()=>{
    const navigate=useNavigate()
    return( 
        <div className='employeListPage'>
            <div className='emplist_header'>
                <h3>Employee</h3>
                <div className='emplist_header_button'>
                    <button className='import_excel_button'><span>{icons.plus}</span> Import Excel</button>
                    <button className='add_employee' onClick={(e)=>navigate('addemployee')}><span>{icons.plus}</span> Add Employee</button>
                </div>
            </div>
            <Eatable/>
        </div>
    );
}

export default EmployeList;