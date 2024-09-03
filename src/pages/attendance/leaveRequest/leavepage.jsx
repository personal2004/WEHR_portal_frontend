import Colorcard from '../../../components/cards/colorcard/colorcard';
import { leaverequesttable, leavecard } from '../../../constants/jsonconstant';
import Eatable from '../../../components/eatable/table';

import './index.css';
const LeaveRequest=()=>{
    return(
        <div className='leaverequest_page'>
            <Colorcard  cardcontent={leavecard}  cards='leave_cards' card='leave_card'/>
            <Eatable tablecon={leaverequesttable} height='61vh'width='81vw'/>
        </div>
    );
}

export default LeaveRequest;