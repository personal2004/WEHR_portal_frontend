import './anouncement.css';
import icons from '../../../constants/icons';
import {announcementdata }from '../../../constants/jsonconstant'
const Anouncement=()=>{
   const ToDate= new Date();
   const formattedDate = ToDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  
 return(
    <div className='anouncement_card'>
      <div className='header'>
      <h3>Announcement</h3>
       <p>{formattedDate}<span>{icons.downarrow}</span></p>
      </div>
      <div className='anoun_contents'>
      {announcementdata.map((data,index)=>{
         return(
            <div key={index} className='anoun_content'>
                  <div>
                  <h3>{data.topic}</h3>
                  <p>{data.time}</p>
                  </div>
                  <button className='anoun_button'>...</button>
             </div>
         );
       })}
      </div>
      {/* <div>See All Announcement </div> */}
    </div>
 );
}

export default Anouncement;