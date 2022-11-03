import { useState } from 'react';
import LoginForm from './LoginForm';

function LoginPage() {
  const admin = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (detail) => {
    console.log(detail);

    if (detail.email === admin.email && detail.password === admin.password) {
      console.log("Logged in");
      setUser({
        name: detail.name,
        email: detail.email
      });
      setError("");
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Log out");
    setUser({name: "", email: ""});
  }

  return (
    <div className="LoginPage">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        // pass in login and error
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default LoginPage;
