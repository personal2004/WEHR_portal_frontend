import './App.css';
import DashboardPage from './pages/dashBoard/dashboradPage';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignIn from './pages/signIn/signin';
import Employee from './pages/employee/employeePage';
import EmployeList from './pages/attendanceListPage/EmployeList';
import AddEmploye from './pages/addEmployee/addEmploye';
import Attendance from './pages/attendance/attendance';
import LeaveRequest from './pages/leaveRequest/leavepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/employee' exact element={<Employee/>}>
            <Route path='employeelist'exact element={<EmployeList/>}/>
            <Route path='addemployee' exact element={<AddEmploye/>}/>
          </Route>
          <Route path='/attendance' exact element={<Attendance/>}>
            <Route path='leaverequest'exact element={<LeaveRequest/>}/>
          </Route>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
