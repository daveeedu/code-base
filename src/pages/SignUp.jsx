import React, { useEffect, useState } from 'react'
// import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { set } from "firebase/database";
import { ref } from "firebase/database";
import { auth, db, registerWithEmailAndPassword } from "../components/Firebase";
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";



const SignUp = () => {
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

//create login page with firebase authentication
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      alert('account created successfully');
      name = '';
      email = '';
      password = '';
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (error) {
      console.log(error);
      alert('error creating account');
    }
  };

  return (
    <div className="bg-info vh-100 ">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mx-auto my-5 ">
            <div className="card card-body b-effect ">
              <h1 className="text-center my-2 fw-bold">
                <i className="fas fa-user-plus"></i> <span className="text-primary">Sign</span> <span className="text-info">Up</span>
              </h1>
              <form onSubmit={e => {
                e.preventDefault();
                setLoading(true);
                registerWithEmailAndPassword(Name, email, password);
                setLoading(false);
                setTimeout(() => {
                  navigate("/");
                }, 2000);
              }}>
                <div className="form-group mb-3">
                  <label className="mb-2 fw-bold" htmlFor="Name">Name</label>
                  <input
                    type="text"
                    id="Name"
                    className="form-control bglight border-0"
                    placeholder="Enter your name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 fw-bold" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control bglight border-0"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 fw-bold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control bglight border-0"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-outline-success hm-button mt-2" disabled={loading}>
                  {loading ? 'Loading...' : 'Sign Up'}
                </button>
              </form>
              <p className="lead mt-4 text-secondary">
                Have an account? <Link className="text-decoration-none" to="/Login">Signin</Link>
              </p>
            </  div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignUp;

  // const [user, loadingUser, errorUser] = useAuthState(auth);

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     function onRegister() {
//       registerWithEmailAndPassword(auth, email, password)
//         .then((userCredentials) => {
//           set(ref(db, 'users/' + userCredentials.user.uid), {
//             Name: Name,
//             email: email,
//           })
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//         .finally(() => {
//           setLoading(false);
//           navigate('/');
//         });
//         onRegister();
//     }
//   }

//   return (
//     <div className="bg-info">
//       <form onSubmit={handleSignUp}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter name"
//             value={Name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input

//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input

//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary"  >
//           {loading ? 'Loading...' : 'Sign Up'}
//         </button>
//         <div>
//           Already have an account? <Link to="/">Sign In</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp