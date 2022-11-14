import { useState } from "react"
import axios from "axios";

export default function Signup() {
    const [info, setInfo] = useState({username: "", password: "", password2: "", email: "", first_name: "", last_name: ""});
    const submitHandle = (event) => {
        axios.post('http://localhost:8000/auth/register/', {username: info.username, password: info.password, password2: info.password2, email: info.email, first_name: info.first_name, last_name: info.last_name}).then(
            (response) => {console.log(response)});
        event.preventDefault();
    }
    return (
        <form onSubmit={submitHandle}>
            <div className="form-inner">
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="Username" id="username" onChange={(event) => setInfo({...info, username: event.target.value})} value={info.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={(event) => setInfo({...info, password: event.target.value})} value={info.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password:</label>
                <input type="password" name="password2" id="password2" onChange={(event) => setInfo({...info, password2: event.target.value})} value={info.password2}/>
                {info.password === info.password2 ? <span></span> : <span>"Password and confirm passowrd does not match."</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(event) => setInfo({...info, email: event.target.value})} value={info.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="first_name">First name:</label>
                <input type="text" name="Firstname" id="Firstname" onChange={(event) => setInfo({...info, first_name: event.target.value})} value={info.first_name}/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last name:</label>
                <input type="text" name="Lasname" id="Lastname" onChange={(event) => setInfo({...info, last_name: event.target.value})} value={info.last_name}/>
            </div>
            <input type="submit" value="Sign Up"/>
            </div>
        </form>
    )
}