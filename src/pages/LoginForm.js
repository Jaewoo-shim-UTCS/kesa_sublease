import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { setAuthToken } from './setAuthToken';

function LoginForm({Login, error}) {
    const [detail, setDetails] = useState({username: "", password: ""});

    const submitHandler = (event) => {
        // prevent refreshing
        axios.post("http://localhost:8000/auth/login/", detail).then(response => {
            console.log(response);
            //get token from response
            const token = response.data.access;

            //set JWT token to local
            localStorage.setItem("token",token);

            //set token to axios common header
            setAuthToken(token);
        })

        event.preventDefault();
        // Login(detail);
    }   
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "" ? <div className="error">{error}</div> : "")}
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" id="name" onChange={(event) => setDetails({...detail, username: event.target.value})} value={detail.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={(event) => setDetails({...detail, password: event.target.value})} value={detail.password}/>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>

  )
}

export default LoginForm;
