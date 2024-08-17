import './App.css';
import DashboardPage from './pages/dashBoard/dashboradPage';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignIn from './pages/signIn/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
