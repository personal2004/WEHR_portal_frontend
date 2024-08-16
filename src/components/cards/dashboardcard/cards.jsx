import { dashboardcard, dashboardreport } from '../../../constants/jsonconstant';
import './cards.css';

const DashboardCard=()=>{
 return(
    <div className='dashnoardcard'>
    <h3>Dashboard</h3>
    <div className='colorcards'>
        {dashboardcard.map((data,index)=>{
            return(
            <div key={index} className='colorcard' style={{ backgroundColor: data.color }}>
                    <h4>{data.subject}</h4>
                    <h4>{data.count}</h4>
                </div>);
        })}
    </div>
    <div className='cardreports'>
        {dashboardreport.map((data,index)=>{
            return(
                <div key={index} className='cardreport'>
                  <div className='card_item'>
                    <h4 className='subject'>{data.subject}</h4>
                    <h4 className='count'>{data.count}</h4>
                    <p>{data.men}<br></br>&nbsp;&nbsp;&nbsp;&nbsp;{data.women}</p>
                  </div>
                  <img src={data.reportimg} alt='report_img'/>
                </div>
            )
        })}
    </div>
    </div>
 );
}

export default DashboardCard