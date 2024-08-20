import './index.css';
import icons from '../../../constants/icons';

const EmpPersonalInfoCard=()=>{
return(
    <div className='personalofemp_card'>
    <div className='personalofemp_card_header'>
        <h3>Personal Details</h3>
        <span>{icons.circleminus}</span>
    </div>
    <div className='personalofemp_input'>
        <div>
            <label>Date Of Birth <span>*</span></label>
            <input type='date' placeholder='Enter Date Of Birth'></input>
        </div>
        <div>
            <label>Gender <span>*</span></label>
            <input type='text' placeholder='Gender'></input>
        </div>
        <div>
            <label>Marital Status <span>*</span></label>
            <input type='text' placeholder='Marital Status *'></input>
        </div>
        <div>
            <label>Is Physical Challanged <span>*</span></label>
            <input type='text' placeholder='Yes'></input>
        </div>
        <div>
            <label>Blood Group <span>*</span></label>
            <input type='text' placeholder=''></input>
        </div>
        <div>
            <label>Personal Email id  <span>*</span></label>
            <input type='email' placeholder='Enter Email id'></input>
        </div>
    </div>
</div>
);
}
export default  EmpPersonalInfoCard;