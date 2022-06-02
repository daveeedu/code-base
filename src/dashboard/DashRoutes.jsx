import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import  { Routes, Route } from 'react-router-dom'
import CoursesPage from '../components/CoursesPage'
import ProfilePage from '../components/Dash1'
import Dash from './Dash'
import CourseDetails from '../components/CourseDetails'

const DashRoutes = () => {
  return (
    <div >
      <Dashboard />
      <Routes>
          <Route exact path="/dashboard" component={<ProfilePage />}/>
          <Route exact path="/CoursesPage" component={<CoursesPage />} />
          <Route exact path="/dash" component={<Dash />} />
          
      </Routes>
      
    </div>
  )
}

export default DashRoutes;