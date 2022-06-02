import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { set } from "firebase/database";
import { ref } from "firebase/database";
import { FcGoogle } from "react-icons/fc";
import { 
  app,
  auth,
  db,
  googleAuthProvider,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
  firebaseConfig,
} from "../components/Firebase";
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";



const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth); 
  const navigate = useNavigate();
 //create login page with firebase authentication and signin with google
  const logInWithEmailAndPassword = async (email, password) => {
   {
      await signInWithEmailAndPassword(auth, email, password);
    } 
  }

  return (
    <div className="bg-info vh-100">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 mt-5 pt-4 ">
            <h3 className="fst-italic fw-bold">Student Login</h3>
            <span className="text-secondary">make sure your account is secure.</span>
            <img src="./images/img5.svg" alt="trollface" className="img-fluid mt-5" />
          </div>
          <div className="col-md-6 mx-auto mt-5 pt-5 ">
            <div className="card card-body b-effect ">
              <h1 className="text-center my-2 fw-bold">
                <i className="fas fa-user-plus"></i> <span className="text-primary">Sign</span> <span className="text-info">In</span>
              </h1>
              <form onSubmit={e => {
                e.preventDefault();
                logInWithEmailAndPassword(auth, email, password);
                setTimeout(() => {
                  navigate("/Dash1");
                }, 2000);
              }
              }>
                <div className="form-group mb-3">
                  <label className="mb-2 fw-bold" htmlFor="email">Email</label>
                  <input

                    type="email"
                    className="form-control border-0 bglight"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 fw-bold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control border-0 bglight"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-success hm-button-ggle1 me-5 mt-3">
                  Log In
                </button>
                <button className="btn btn-outline-primary hm-button-ggle mt-3" onClick={() => {
                  signInWithGoogle(auth, googleAuthProvider);
                  setTimeout(() => {
                    navigate("/Dash1");
                  }, 2000);
                }
                }>
                 <FcGoogle /> Log In With Google
                </button>
              </form>
              <div className="text-center mt-3 text-secondary">
                <p> Don't have an account? <Link className="text-decoration-none" to="/signup">Register</Link> now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LogIn;


  
