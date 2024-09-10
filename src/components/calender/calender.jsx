import './calender.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Birthday from '../cards/birthday/birthday';
import { birthdata } from '../../constants/jsonconstant';
import { useEffect, useState } from 'react';

const CalenderComponent=()=>{
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredBirthdays, setFilteredBirthdays] = useState([]);

    useEffect(() => {
        const updatedBirthdays = birthdata.filter((birthday) => {
            return birthday.date!=='' &&
             new Date(birthday.date)>= new Date(selectedDate);
        });
        setFilteredBirthdays(updatedBirthdays);
    }, [selectedDate]);

    useEffect(() => {
        const todayBirthdays = birthdata.filter((birthday) => {
            return birthday.date!=='' && new Date(birthday.date) >= new Date();
        });
        setFilteredBirthdays(todayBirthdays);
    }, []); 

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
 
    return(
        <div className='calenderactivity'>
        <div className='calender'>
            <h3>Calender</h3>
            <div className='custom-style' >
            <Calendar  onChange={handleDateChange} value={selectedDate} />
            </div>
        </div>
         <Birthday birthaydata={filteredBirthdays}/>
        </div>
    );

}

export default CalenderComponent;