import './App.css';
import DashboardPage from './pages/dashBoard/dashboradPage';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignIn from './pages/signIn/signin';
import Employee from './pages/employee/employeeroot/employeePage';
import EmployeAttenList from './pages/employattendanceListPage/employeAttenList';
import Attendance from './pages/attendance/attendanceroot/attendance';
import LeaveRequest from './pages/attendance/leaveRequest/leavepage';
import AddEmploye from './pages/employee/addEmployee/addEmploye';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/employee' exact element={<Employee/>}>
            <Route path='employeelist'exact element={<EmployeAttenList/>}/>
            <Route path='addemployee' exact element={<AddEmploye/>}/>
          </Route>
          <Route path='/attendance' exact element={<Attendance/>}>
            <Route path='leaverequest'exact element={<LeaveRequest/>}/>
            <Route path='attendancelist' exact element={<EmployeAttenList/>}/>
          </Route>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
