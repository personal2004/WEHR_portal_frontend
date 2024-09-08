import './index.css';
import icons from '../../constants/icons';
import Eatable from '../../components/eatable/table';
import { useNavigate } from 'react-router-dom';
const EmployeAttenList=({title,tablecon})=>{
    const navigate=useNavigate();
    return( 
        <div className='employeListPage'>
            <div className='emplist_header'>
                <div className='item list_title'><h3>{title}</h3></div>
                <div className='item emplist_header_button'>
                    <button className='import_excel_button'><span>{icons.plus}</span> Import Excel</button>
                    <button className='add_employee' onClick={(e)=>navigate('addemployee')}><span>{icons.plus}</span> Add Employee</button>
                </div>
            </div>
            <Eatable tablecon={tablecon}/>
        </div>
    );
}

export default EmployeAttenList;