import './calender.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import { useState } from 'react';

const CalenderComponent=()=>{
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <div className='calender'>
            <h3>Calender</h3>
            <div style={{display:'flex',justifyContent:'space-around'}} >
            <Calendar  onChange={handleDateChange} value={selectedDate} />
            </div>
        </div>
    );

}

export default CalenderComponent;