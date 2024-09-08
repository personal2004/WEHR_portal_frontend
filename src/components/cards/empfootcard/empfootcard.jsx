import './index.css'
const EmpFootCard=({title,icon='',cancel='',save=''})=>{
    return(
        <div className='empfoot_card'>
        <h3 className='footitem'>{title}</h3>
        <div className='footitem empfootend'>
           {icon!=='' && <span>{icon}</span>}
           <div className='empfoot_button'>           
           {cancel!=='' && <button className='cancel_button'>Cancel</button>}
           {save!=='' && <button className='save_button'>Save</button>}
           </div>

        </div>
        </div>
    )
}

export default EmpFootCard;