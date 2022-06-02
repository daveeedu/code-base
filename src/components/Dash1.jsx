import Dashboard from '../dashboard/Dashboard'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../components/Firebase";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";

const Dash1 = () => {
  const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        const query = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(query);
        if (docs.length === 0) {
            const userRef = addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "local",
                email: user.email
            });
        }
    }
    useEffect(() => {
        fetchUserName();
    }
    , [user]);
  return (
    <div className="bg-info vh-100">
      <Dashboard />
      <div className="container row">
        <div className="col-md-4 welcome1">
          <h2 className="welcome fst-italic fw-bold ">Welcome {user.displayName}</h2>
        </div>
        <div className="col-md-4">
          <img src="./images/img3.svg" alt="profile"  width="500px" height="500px"/>
          </div>
      </div>
    </div>
  )
}

export default Dash1;