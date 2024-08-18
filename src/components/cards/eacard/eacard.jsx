import './eacard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {  employeeCard,attendanceCard} from '../../../constants/jsonconstant';
const EAcard=()=>{
    const location=useLocation();
    const constant=location.pathname==='/employee'?employeeCard:attendanceCard;
    const navigate=useNavigate();
    const navigatepage=()=>{
        if (location.pathname==='/employee'){
            navigate('employeelist')
        }else{
             navigate('/attendance/leaverequest')
        }
    }
    return(
        <div className='ea_page'>
        <h3 className='ea_header'>{constant[0].header}</h3>
            <div className='ea_page_cards'>
                {constant.map((data,index)=>{
                    return(
                    <div key={index} className='ea_page_card' onClick={navigatepage}>
                        <div className='ea_page_icon'>{data.icon}</div>
                        <p>{data.name}</p>
                    </div> 
                    );
                })}                
            </div>
        </div>
    );
}

export default EAcard;