// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, 
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    reload,
} from "firebase/auth";
import {getFirestore, 
    query,
    getDocs,
    collection,
    where,
    addDoc,
    updateDoc,
    deleteDoc,} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0mfcwsgMV3FoBkosKjcgzFfCCLKbL2Es",
  authDomain: "code-base-c170a.firebaseapp.com",
  projectId: "code-base-c170a",
  storageBucket: "code-base-c170a.appspot.com",
  messagingSenderId: "839403839548",
  appId: "1:839403839548:web:e6ef5aa5776290f427e339",
  measurementId: "G-V1FP3QPL97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const googleAuthProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    const query = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(query);
    if (docs.length === 0) {
        const userRef = addDoc(collection(db, 'users'), {
            uid: user.uid,
            Name: user.displayName,
            email: user.email,
        });
    }
    } catch (error) {
    console.log(error);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert('create an account by clicking register');
        email = '';
        password = '';
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    {
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
    } 
};

const logout = () => {
    signOut(auth);
};


export {
    app,
    auth,
    db,
    googleAuthProvider,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    firebaseConfig,
};



