import { useState } from "react";
import React from "react";
import {useUser} from "../Context/UserContextProvider.jsx";


const Login = () => {
    const [Password, setPassword] = useState('')
    const [username, setusername] = useState('')
    const { setUser } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, Password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                
            />
            <input
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default Login
