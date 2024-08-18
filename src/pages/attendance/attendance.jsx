import { useLocation } from 'react-router-dom';
import './index.css';
import EAcard from '../../components/cards/eacard/eacard';
import Layout from '../../components/layout/layout';

const Attendance=()=>{

    const location=useLocation();
    const showattendancecard=location.pathname==='/attendance';
    return(
        <Layout>
                {showattendancecard &&
                        <EAcard/>
                 }
        </Layout>

    );
}

export default Attendance;