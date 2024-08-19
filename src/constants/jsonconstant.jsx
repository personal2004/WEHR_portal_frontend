import icons from './icons'
import {dashrepo1,dashrepo2,birthdayboy,roundblankphoto,userprogres} from './images'
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
const employeeCard=[{header:'Employee',icon:icons.personadd,name:'Employee'},{icon:icons.organ,name:'Org Config'}]
const attendanceCard=[{header:'Attendance',icon:icons.personadd,name:'Leave Request'},{icon:<img src={userprogres} alt='attendance'/>,name:'Attendances'}]
const employeetable=[{name:{rollnum:'11D001',name:'MAGHESH',email:'magesh@Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D001',name:'Tesla',email:'Rsahull@Dotcod.in'},date:'4/5/22',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D002',name:'GM',email:'gm@Dotcod.in'},date:'7/9/22',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D003',name:'AARP',email:'aarp @Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D003',name:'Disney ',email:'@Dotcod.in'},date:'7/2/221',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D003',name:'Prime Theraputics ',email:'@Dotcod.in'},date:'12/1/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D004',name:'Match.com',email:' CODE@Dotcod.in'},date:'21/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D005',name:'Chevy ',email:'@Dotcod.in'},date:'11/7/23',designation:'Software Engineer',status:'Probation',options:'...'},
]
const attendancetable=[]
export{
    dashboardcard,
    dashboardreport,
    announcementdata,
    birthdata,
    employeeCard,
    attendanceCard,
    employeetable
}