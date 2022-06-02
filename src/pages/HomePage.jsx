import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="bg-info vh-100">
        <NavBar />
        <div className="row">
            <div className="col-md-6 text-start ms-5 ">
                <h1 className="my-4 fw-bold display-2"><span className="text-success">Learn</span> to Code <br></br>with <span className="text-primary">CodeBase</span></h1>
                <p className="my-2 text-dark lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis assumenda qui vitae illo soluta magni architecto aspernatur magnam? Ullam explicabo eligendi sapiente, totam hic enim animi asperiores nisi facere doloremque!</p>
                <div className="d-flex justify-content-center">
                <Link className="btn btn-outline-primary my-5 me-5 hm-button" to="/Login">Sign In</Link>
                <Link className="my-5 hm-button btn btn-outline-success" to="/signup">Sign Up</Link>
                </div>
            </div>
            <div className="col-md-5 mt-5">
                <img src="./images/img4.svg" className="img-fluid mt-5 pt-5" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default HomePage