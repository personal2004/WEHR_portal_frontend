import './index.css';
import DashboardCard from '../../components/cards/dashboardcard/cards';
import Layout from "../../components/layout/layout";
import CalenderComponent from '../../components/calender/calender';
import Anouncement from '../../components/cards/anouncement/anouncement';
import Birthday from '../../components/cards/birthday/birthday';

const DashboardPage=()=>{
    return(
        <Layout >
        <div className='dash_page'>
            <div className='cardanouncement'>
                <DashboardCard/>
                <Anouncement/>
            </div>
            <div className='calenderactivity'>
                <CalenderComponent/>
                <Birthday/>
            </div>
        </div>
        </Layout>
    );
}

export default DashboardPage;