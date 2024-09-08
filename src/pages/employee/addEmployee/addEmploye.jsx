import EmpDetailCard from '../../../components/cards/empdetail/empdetail';
import EmpFootCard from '../../../components/cards/empfootcard/empfootcard';
import icons from '../../../constants/icons';
import { empsdetail, empspersonaldetail } from '../../../constants/jsonconstant';

import './index.css';

const AddEmploye=()=>{
    return(
         <div className='addemp_page'>
         <EmpDetailCard empsdetail={empsdetail} header='basicinfo'/>
         <EmpDetailCard empsdetail={empspersonaldetail} header='personalinfo'/>
         <EmpFootCard title='Department' icon={icons.circleplus}/>
         <EmpFootCard title='Configuration' cancel='Cancel' save='Save'/>
         </div>

    );
}

export default AddEmploye;
