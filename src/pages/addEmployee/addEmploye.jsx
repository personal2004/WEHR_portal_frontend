import EmpDetailCard from '../../components/cards/empdetail/empdetail';
import EmpFootCard from '../../components/cards/empfootcard/empfootcard';
import EmpPersonalInfoCard from '../../components/cards/emppersonaldetail/emppersonalinfocard';
import icons from '../../constants/icons';
import './index.css';

const AddEmploye=()=>{
    return(
         <div className='addemp_page'>
         <EmpDetailCard/>
         <EmpPersonalInfoCard/>
         <EmpFootCard title='Department' icon={icons.circleplus}/>
         <EmpFootCard title='Configuration' cancel='Cancel' save='Save'/>
         </div>

    );
}

export default AddEmploye;
