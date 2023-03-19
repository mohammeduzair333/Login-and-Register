import React, { useState, useEffect } from "react";
import axios from "axios";

export const Register = (props) => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);





    const handleSubmit = (e) => {
        e.preventDefault();
        const responce = axios.post(`http://localhost:8080/api/v1/auth/register`,
            {
                name: 'Mohammed Uzair S',
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
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="Name" placeholder="Name" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="*******" name="password" id="password" />

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Already Have an Account? Login Here.</button>
        </div>


    )
}