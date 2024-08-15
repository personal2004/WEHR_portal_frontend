import { RiDashboardHorizontalFill,RiMessage2Fill } from "react-icons/ri";
import { BsCalendar2EventFill, BsFillPersonPlusFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { VscTasklist } from "react-icons/vsc";
import { CiShare2,CiSearch } from "react-icons/ci";
import { PiHeadsetFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { FiArrowDown } from "react-icons/fi";
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
  downarrow:<FiArrowDown/>
};

export default icons;
