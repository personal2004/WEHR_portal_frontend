import './index.css';
import { birthdata } from '../../../constants/jsonconstant';
const Birthday=()=>{
    return(
        <div className='birthdayCards'>
        <h3 className='birthdayCards_header'>Birthday Calender</h3>
        <div className='birthday_cards'>
        {birthdata.map((data,index)=>{
            return(
             <div key={index} className='birthday_card'>
                 <img src={data.img} alt='profile_pic'/>
                 <h3>{data.name}</h3>
                 <h5>{data.position}</h5>
                 <p>{data.date}</p>
             </div>
            );
        })}
        </div>
        </div>
    );
}

export default Birthday;