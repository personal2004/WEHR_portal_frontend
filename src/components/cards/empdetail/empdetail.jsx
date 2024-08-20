import './index.css';
import icons from '../../../constants/icons';
const EmpDetailCard=()=>{
    return(
        <div className='detailofemp_card'>
        <div className='detailofemp_card_header'>
            <h3>Add details of an employee</h3>
            <span>{icons.circleminus}</span>
        </div>
        <div className='detailofemp_input'>
            <div>
                <label>Employee Name <span>*</span></label>
                <input type='text' placeholder='Enter Employee Name'></input>
            </div>
            <div>
                <label>Employee Number <span>*</span></label>
                <input type='number' placeholder='Enter Employee Number'></input>
            </div>
            <div>
                <label>Date of joining  <span>*</span></label>
                <input type='date' placeholder='Enter Joining date'></input>
            </div>
            <div>
                <label>Email Id <span>*</span></label>
                <input type='email' placeholder='Enter Email id'></input>
            </div>
            <div>
                <label>Mobile Number <span>*</span></label>
                <input type='phonenumber' placeholder='Enter Mobile Number'></input>
            </div>
            <div>
                <label>Employee Status <span>*</span></label>
                <input type='text' placeholder='Employee Status'></input>
            </div>

        </div>
    </div>
    );
}

export default EmpDetailCard;