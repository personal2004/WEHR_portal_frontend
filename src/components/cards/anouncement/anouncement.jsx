import './anouncement.css';
import icons from '../../../constants/icons';
import {announcementdata }from '../../../constants/jsonconstant'
import { useState } from 'react';
const Anouncement=()=>{

   const [scroll,setscroll]=useState(true);
   const ToDate= new Date();
   const formattedDate = ToDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
      let anouncount;
 return(
   <>
    <div className='anouncement_card'>
      <div className='header'>
      <h3>Announcement</h3>
      <div className='anouncement_date'>
         <h3>Today, {formattedDate}</h3>
         <button>{icons.downarrow}</button>
      </div>
      </div>
      <div className={scroll===true?'anoun_contents':'anoun_scroll'}>
         {announcementdata.map((data,index)=>{
            anouncount=index
            return(
               <div key={index} className='anoun_content'>
                     <div className='anoun_schedule'>
                     <h3>{data.topic}</h3>
                     <p>{data.time}</p>
                     </div>
                     <button className='anoun_button'>{icons.threedot}</button>
               </div>
            );
         })}
      </div>
    </div>
   {anouncount>=3 &&
   <button onClick={()=>setscroll(false)} className={scroll===true? 'anoun_more' : 'anoun_none'}>
      See All Announcements</button> 
   }
   </>
 );
}

export default Anouncement;