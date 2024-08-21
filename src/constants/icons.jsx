import { RiDashboardHorizontalFill,RiMessage2Fill } from "react-icons/ri";
import { BsCalendar2EventFill, BsFillPersonPlusFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { VscTasklist } from "react-icons/vsc";
import { CiShare2,CiSearch, CiLock , CiCircleMinus,CiCirclePlus} from "react-icons/ci";
import { PiHeadsetFill,PiBuildingApartmentThin } from "react-icons/pi";
import { IoSettingsSharp,IoBagHandleOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { FiArrowDown } from "react-icons/fi";
import { GoPersonAdd,GoDot } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegCheckCircle,FaTimesCircle } from "react-icons/fa";

const icons = {
  dashboard: <RiDashboardHorizontalFill/>,
  attendance: <BsCalendar2EventFill/>,
  employee: <BsFillPersonPlusFill/>,
  payroll: <HiMiniUserGroup/>,
  task: <VscTasklist/>,
  announcement: <CiShare2/>,
  support: <PiHeadsetFill/>,
  settings:<IoSettingsSharp/>, 
  message:<RiMessage2Fill/>,
  search:< CiSearch/>,
  notification:<VscBellDot/>,
  downarrow:<FiArrowDown/>,
  companyId:<IoBagHandleOutline/>,
  password:<CiLock/>,
  personadd:<GoPersonAdd/>,
  organ:<PiBuildingApartmentThin/>,
  plus:<FaPlus/>,
  threedot:<BiDotsHorizontalRounded/>,
  circle:<GoDot/>,
  circleminus:<CiCircleMinus/>,
  circleplus:<CiCirclePlus/>,
  circlecorrect:<FaRegCheckCircle />,
  circlewrong:<FaTimesCircle/>
};

export default icons;
