import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../components/Firebase";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";
import Dashboard from "./Dashboard";
function Dash() {
    //create a new dashboard instance
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
        <div className="dashboard bg-info vh-100">
            <Dashboard />
            <div className="container border log">
                <h1 className="text-center my-4 fw-bold"><span className="text-primary">logged</span> in<span className="text-success">as</span> </h1>
                <h1 className="mb-3 fst-italic">{user.displayName}</h1>
                <p className="mb-5">{user.email}</p>
                <button className="btn btn-outline-primary hm-button" onClick={logout}>logout</button>
                </div>
        </div>
    )
}
export default Dash;
