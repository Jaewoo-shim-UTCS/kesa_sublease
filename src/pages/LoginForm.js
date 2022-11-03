import React from 'react';
import { useState } from 'react';

function LoginForm({Login, error}) {
    const [detail, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = (event) => {
        // prevent refreshing
        event.preventDefault();
        Login(detail);
    }   
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "" ? <div className="error">{error}</div> : "")}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={(event) => setDetails({...detail, name: event.target.value})} value={detail.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(event) => setDetails({...detail, email: event.target.value})} value={detail.email}/>
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
