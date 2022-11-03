import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import LoginForm from "./pages/LoginForm"
import LoginPage from "./pages/LoginPage"
import Signup from "./pages/signup"

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </>
    )
}

export default App