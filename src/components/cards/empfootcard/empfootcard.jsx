import './index.css'
import icons from '../../../constants/icons';
const EmpFootCard=({title,icon='',cancel='',save=''})=>{
    return(
        <div className='empfoot_card'>
        <h3>{title}</h3>
        <div className='empfootend'>
           {icon!=='' && <span>{icon}</span>}
           {cancel!=='' && <button className='cancel_button'>Cancel</button>}
           {save!=='' && <button className='save_button'>Save</button>}
        </div>
        </div>
    )
}

export default EmpFootCard;