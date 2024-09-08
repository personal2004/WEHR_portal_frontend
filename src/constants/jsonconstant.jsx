import icons from './icons';
import {dashrepo1,dashrepo2,birthdayboy,roundblankphoto,userprogres,approve,pending} from './images';

const dashboardcard=[ { color:'#FFEFE7',subject:'Leave Request ',count:'04'}, { color:'#E8F0FB',subject:'Attendance',count:'10'},
    { color:'#FDEBF9',subject:'Total Employees',count:'24'}]

const leavecard=[ { color:'#FFEFE7',subject:'Casual Leave',count:'04',percent:'+2% Jan month'}, { color:'#FDEBF9',subject:'Emergency Leave',count:'06',percent:'+2% Jan month'},
        { color:'#E8F0FB',subject:'Total Leave Jan',count:'10',percent:'+2% Jan month'},{ color:'#FDEBF9',subject:'Today Leave',count:'02',percent:'+2% Jan month'}]

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
    {img:roundblankphoto,name:'Robert Whistable',position:'Product manager',date:'22 August 2024'},
    {img:birthdayboy,name:'Robert Whistable',position:'Product manager',date:'15 feb 1998'},
    {img:birthdayboy,name:'Robert Whistable',position:'Product manager',date:'15 feb 2998'},
    {img:roundblankphoto,name:'Robert Whistable',position:'Product manager',date:'22 August 2124'},
    {img:birthdayboy,name:'Robert Whistable',position:'Product manager',date:'15 feb 2498'}
]
const employeeCard=[{header:'Employee',icon:icons.personadd,name:'Employee',path:'/employee/employeelist'},{icon:icons.organ,name:'Org Config'}]

const attendanceCard=[{header:'Attendance',icon:icons.personadd,name:'Leave Request',path:'/attendance/leaverequest'},
    {icon:<img src={userprogres} alt='attendance'/>,name:'Attendances',path:'/attendance/attendancelist'}]

const employeetable=[{header:{col1:'Name',col2:'Join Date',col3:'Designation',col4:'Status',col5:'Options'},data:{dataname:'employee',count:'250'},
    name:{rollnum:'11D001',name:'MAGHESH',email:'magesh@Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D001',name:'Tesla',email:'Rsahull@Dotcod.in'},date:'4/5/22',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D002',name:'GM',email:'gm@Dotcod.in'},date:'7/9/22',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D003',name:'AARP',email:'aarp @Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D003',name:'Disney ',email:'@Dotcod.in'},date:'7/2/221',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D003',name:'Prime Theraputics ',email:'@Dotcod.in'},date:'12/1/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{rollnum:'11D004',name:'Match.com',email:' CODE@Dotcod.in'},date:'21/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{rollnum:'11D005',name:'Chevy ',email:'@Dotcod.in'},date:'11/7/23',designation:'Software Engineer',status:'Probation',options:'...'}
]

const attendancetable=[{header:{col1:'Name',col2:'Join Date',col3:'Designation',col4:'Status',col5:'Options'},data:{dataname:'Attendances',count:'250'},
    name:{name:'MAGHESH',email:'magesh@Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{name:'Tesla',email:'Rsahull@Dotcod.in'},date:'4/5/22',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{name:'GM',email:'gm@Dotcod.in'},date:'7/9/22',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{name:'AARP',email:'aarp @Dotcod.in'},date:'1/2/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{name:'Disney ',email:'@Dotcod.in'},date:'7/2/221',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{name:'Prime Theraputics ',email:'@Dotcod.in'},date:'12/1/23',designation:'Software Engineer',status:'Probation',options:'...'},
    {name:{name:'Match.com',email:' CODE@Dotcod.in'},date:'21/2/23',designation:'Software Engineer',status:'Confirmed',options:'...'},
    {name:{name:'Chevy ',email:'@Dotcod.in'},date:'11/7/23',designation:'Software Engineer',status:'Probation',options:'...'}]

const leaverequesttable=[{header:{col1:'Name',col2:'Reuest Date ',col3:'Leave type',col4:'Reason',col5:'No Days',col6:'Status',col7:'Actions'},
    data:{dataname:'Actions',count:'01'},
    name:{name:'MAGHESH',email:'magesh@Dotcod.in'},date:'1/2/23',designation:'Casual Leave',Reason:'Not Well....',days:'01',status:<img style={{width:'79px',height:'30px'}} src={pending} alt='Pending'/>},
    {name:{name:'Tesla',email:'Rsahull@Dotcod.in'},date:'12/2/22 - 16/02/22',designation:'Sick Leave',Reason:'Not Well....',days:'02',status:<img style={{width:'79px',height:'30px'}} src={approve} alt='Approve'/>},
    {name:{name:'GM',email:'gm@Dotcod.in'},date:'7/9/22',designation:'Casual Leave',Reason:'Sick Leave',days:'01',status:<img style={{width:'79px',height:'30px'}}  src={approve} alt='Approve'/>},
    {name:{name:'AARP',email:'aarp @Dotcod.in'},date:'1/2/23',designation:'Sick Leave',Reason:'Marriage Function',days:'03',status:<img style={{width:'79px',height:'30px'}} src={approve} alt='Approve'/>},
    {name:{name:'Disney ',email:'@Dotcod.in'},date:'7/2/221',designation:'Sick Leave',Reason:'Marriage Function',days:'01',status:<img style={{width:'79px',height:'30px'}} src={pending} alt='Pending'/>},
    {name:{name:'Prime Theraputics ',email:'@Dotcod.in'},date:'12/2/22 - 16/02/22',designation:'Not Well....',Reason:'Casual Leave',days:'01',status:<img style={{width:'79px',height:'30px'}} src={approve} alt='Approve'/>},
    {name:{name:'Match.com',email:' CODE@Dotcod.in'},date:'21/2/23',designation:'Sick Leave',Reason:'Not Well....',days:'04',status:<img style={{width:'79px',height:'30px'}} src={approve} alt='Approve'/>},
    {name:{name:'Chevy ',email:'@Dotcod.in'},date:'11/7/23',designation:'Casual Leave',Reason:'Marriage Function',days:'01',status:<img style={{width:'79px',height:'30px'}} src={pending} alt='Pending'/>}]

const empsdetail = [
        {label: `Employee Name`,name: 'name',placeholder:'Enter Employee Name',type:'text'},
        {label:`Employee Number`,name: 'emid',placeholder:'Enter Employee Number',type:'text'},
        {label: `Date of joining `,name: 'joindate',placeholder:'Enter Joining date',type:'date'},
        {label: `Email Id `,name: 'email',placeholder:'Enter Email id',type:'text'},
        {label: `Mobile Number`,name: 'phnumber',placeholder:'Enter Mobile Number',type:'text'},
        {label: `Employee Status`,name: 'status',placeholder:'Employee Status',type:'text'},
    ];
const empspersonaldetail = [
        {label: `Date Of Birth`,name: 'name',placeholder:'Enter Date Of Birth',type:'date'},
        {label:`Gender`,name: 'emid',placeholder:'Gender',type:'text'},
        {label: `Marital Status `,name: 'joindate',placeholder:'Marital Status',type:'text'},
        {label: `Is Physical Challanged `,name: 'email',placeholder:'Yes',type:'text'},
        {label: `Blood Group`,name: 'phnumber',placeholder:' ',type:'text'},
        {label: `Personal Email id`,name: 'status',placeholder:'Enter Email id',type:'email'},
    ];
export{
    dashboardcard,
    dashboardreport,
    announcementdata,
    birthdata,
    employeeCard,
    attendanceCard,
    employeetable,
    attendancetable,
    leavecard,
    leaverequesttable,
    empsdetail,
    empspersonaldetail  
}