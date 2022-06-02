import React from 'react'
import Dashboard from '../dashboard/Dashboard'

const Dash1 = () => {
  return (
    <div className="bg-info vh-100">
      <Dashboard />
      <div className="container row">
        <div className="col-md-4 welcome1">
          <h2 className="welcome fst-italic fw-bold ">Welcome David</h2>
        </div>
        <div className="col-md-4">
          <img src="./images/img3.svg" alt="profile"  width="500px" height="500px"/>
          </div>
      </div>
    </div>
  )
}

export default Dash1;