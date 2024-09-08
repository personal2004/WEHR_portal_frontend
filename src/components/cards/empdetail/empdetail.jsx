import './index.css';
import icons from '../../../constants/icons';
import { Field, Formik } from 'formik';
const EmpDetailCard=({empsdetail,header})=>{
    const empValues={
        name:'',
        emid:'',
        joindate:'',
        email:'',
        phnumber:'',
        status:'',
    }
    return(
        <div className='detailofemp_card'>
        <div className='detailofemp_card_header'>
            {header==='basicinfo' && <h3 className='dhone'>Add details of an employee</h3>}            
            {header==='basicinfo' && <div className='dhtwo'>{icons.circleminus}</div>}
            {header==='personalinfo' && <h3 className='dhone'>Personal Details</h3>}
            {header==='personalinfo' && <div className='dhtwo'>{icons.circleplus}</div>}
        </div>
        <div className='detailofemp_input'>
            <Formik initialValues={empValues} >
             {()=>(
                empsdetail.map((emps,index)=>(
                    <div key={index}>
                    <label htmlFor={emps.name}>{emps.label} <span>*</span></label>
                    <Field id={emps.name} name={emps.name} type={emps.type} placeholder={emps.placeholder}/>
                    </div>
                ))        
              )}
            </Formik>
        </div>
    </div>
    );
}

export default EmpDetailCard;