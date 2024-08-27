import './index.css';
import DashboardCard from '../../components/cards/dashboardcard/cards';
import CalenderComponent from '../../components/calender/calender'
import Anouncement from '../../components/cards/anouncement/anouncement';
const DashboardPage=()=>{
    return(
        <div className='dash_page'>
            <div className='cardanouncement'>
                <DashboardCard/>
                <Anouncement/>
            </div>
                <CalenderComponent/>
        </div>
    );
}

export default DashboardPage;