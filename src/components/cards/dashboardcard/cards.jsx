import { dashboardcard, dashboardreport } from '../../../constants/jsonconstant';
import Colorcard from '../colorcard/colorcard';
import './cards.css';

const DashboardCard=()=>{
 return(
    <div className='dashnoardcard'>
    <h3>Dashboard</h3>
    <Colorcard cardcontent={dashboardcard}/>
    <div className='cardreports'>
        {dashboardreport.map((data,index)=>{
            return(
                <div key={index} className='cardreport'>
                  <div className='card_item'>
                    <h4 className='subject'>{data.subject}</h4>
                    <h4 className='count'>{data.count}</h4>
                    <p>{data.men}</p>
                    <p>{data.women}</p>
                  </div>
                  <img className='report_img'src={data.reportimg} alt='report_img'/>
                </div>
            )
        })}
    </div>
    </div>
 );
}

export default DashboardCard