// Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import 'firebase/auth';
import classes from "./Login.module.scss";

const Login = () => {
  const [password, setPassword] = useState('');

  const email = "dhyun1124@gmail.com"

  const handleLogin = async () => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert("WRONG KEY!")
  });

  };

  return (
    <div className={classes.container}>
      <p2>Enter Access Key</p2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
