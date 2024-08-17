import {dashrepo1,dashrepo2,birthdayboy,roundblankphoto} from './images'

const dashboardcard=[ { color:'#FFEFE7',subject:'Leave Request ',count:'04'}, { color:'#E8F0FB',subject:'Attendance',count:'10'},
    { color:'#FDEBF9',subject:'Total Employees',count:'24'}]

const dashboardreport=[{subject:'PayRoll',count:'48',men:'12 Men',women:'12 Women',reportimg:dashrepo1},
    {subject:'Task Request',count:'16',men:'6 Men',women:'10 Women',reportimg:dashrepo2},]

const announcementdata=[{topic:'Outing schedule for every departement',time:'5 Minutes ago'},
    {topic:'Meeting HR Department',time:'Yesterday, 12:30 PM'},
    {topic:'IT Department need two more talents for UX/UI Designer position',time:'Yesterday, 09:15 AM'},
    {topic:'Outing schedule for every departement',time:'5 Minutes ago'},
    {topic:'Meeting HR Department',time:'Yesterday, 12:30 PM'},
    {topic:'IT Department need two more talents for UX/UI Designer position',time:'Yesterday, 09:15 AM'},
    {topic:'IT Department need two more talents for UX/UI Designer position',time:'Yesterday, 09:15 AM'},

]
   
const birthdata=[{img:birthdayboy,name:'Robert Whistable',position:'Product manager',date:'15 feb 1998'},
    {img:roundblankphoto,name:'Robert Whistable',position:'Product manager',date:''},
    {img:birthdayboy,name:'Robert Whistable',position:'Product manager',date:'15 feb 1998'},
]

export{
    dashboardcard,
    dashboardreport,
    announcementdata,
    birthdata
}