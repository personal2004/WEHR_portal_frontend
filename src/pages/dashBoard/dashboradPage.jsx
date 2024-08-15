import './index.css';
import DashboardCard from "../../components/dashboardcard/cards";
import Layout from "../../components/layout/layout";
import CalenderComponent from '../../components/calender/calender';

const DashboardPage=()=>{
    return(
        <Layout>
        <div className='cardcalender'>
        <DashboardCard/>
        <CalenderComponent/>
        </div>
        </Layout>
    );
}

export default DashboardPage;