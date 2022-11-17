import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import LoginForm from "./pages/LoginForm"
import Signup from "./pages/signupForm"
import { setAuthToken } from "./pages/setAuthToken"

// how to run backend:
// command: source env/bin/activate
// python3 manage.py runserver

function App() {
    //check jwt token
    const token = localStorage.getItem("token");
    if(token) {
        setAuthToken(token);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>
        </>
    )
}

export default App