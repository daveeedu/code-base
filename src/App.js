import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './dashboard/Dashboard';
import Dash from './dashboard/Dash';
import CoursesPage from './components/CoursesPage';
import Dash1 from './components/Dash1';
import courses from './data/Data';
import DashRoutes from './dashboard/DashRoutes';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/DashRoutes" element={<Dash1 />} />
          <Route exact path="/Dashboard" element={<Dashboard />} /> 
          <Route exact path="/Dash" element={<Dash1 />} />
          <Route exact path="/CoursesPage" element={<CoursesPage data={courses}/>} />
          <Route exact path="/course/:id" element={<CourseDetails data={courses} />} />
          <Route exact path="/ProfilePage" element={<Dash />} />
        </Routes>
    </div>
  );
}

export default App;
