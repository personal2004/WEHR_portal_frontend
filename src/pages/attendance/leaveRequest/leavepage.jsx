import Colorcard from '../../../components/cards/colorcard/colorcard';
import { leaverequesttable, leavecard } from '../../../constants/jsonconstant';
import Eatable from '../../../components/eatable/table';

import './index.css';
const LeaveRequest=()=>{
    return(
        <div className='leaverequest_page'>
            <Colorcard  cardcontent={leavecard}  cards='leave_cards' card='leave_card'/>
            <Eatable tablecon={leaverequesttable} tableclass='leave_card_table_outlet'/>
        </div>
    );
}

export default LeaveRequest;