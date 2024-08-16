import {dashrepo1,dashrepo2} from './images'

const dashboardcard=[ { color:'#FFEFE7',subject:'Leave Request ',count:'04'}, { color:'#E8F0FB',subject:'Attendance',count:'10'},
    { color:'#FDEBF9',subject:'Total Employees',count:'24'}]

const dashboardreport=[{subject:'PayRoll',count:'48',men:'12 Men',women:'12 Women',reportimg:dashrepo1},
    {subject:'Task Request',count:'16',men:'6 Men',women:'10 Women',reportimg:dashrepo2},]

const announcementdata=[{topic:'Outing schedule for every departement',time:'5 Minutes ago'},
    {topic:'Meeting HR Department',time:'Yesterday, 12:30 PM'},
    {topic:'IT Department need two more talents for UX/UI Designer position',time:'Yesterday, 09:15 AM'}]
   
export{
    dashboardcard,
    dashboardreport,
    announcementdata
}