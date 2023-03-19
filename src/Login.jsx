import React, { useState, useEffect } from "react";
import axios from "axios";
export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');


    const a = "hello";
    const handleSubmit = (e) => {
        e.preventDefault();
        const responce = axios.post(`http://localhost:8080/api/v1/auth/authenticate`,
            {
                email: 'mohammed@gmail.com',
                password: '12345'
            })
            .then(res => {
                console.log(res);
            })
            .catch((err => {
                console.log(err)
            }))


    }

    return (
        <div className="auth-form-container">
            <div>
                {
                    users.map((user) =>
                        <h1>{user.name}</h1>
                    )
                }
            </div>
            <form className="login-form" onSubmit={handleSubmit}>


                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button type="submit">Log In</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')} >Don't have an account? Register Here</button>
        </div>
    )
}