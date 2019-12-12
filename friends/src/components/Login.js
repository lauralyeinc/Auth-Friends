import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = (props) => {
    const  [creds, setCreds] = useState({})
    
    console.log(creds);
    const handleChange = event => {
    setCreds({
        ...creds,
        [event.target.name]: event.target.value
        
    })
    };

    const handleSubmit = event => {      // login 
        event.preventDefault();
        axiosWithAuth() 
            .post("http://localhost:5000/api/login", creds)
            .then(res => {
                console.log("Login.js : Login: login: then: res", res.data);
                localStorage.setItem('token', res.data.payload);     //res.data.token or res.data.payload??  
                props.history.push("/protected");
            })
            .catch( error => {
                console.log("Login.js: Login: login: then: error.message", error)
            });
            console.log(handleSubmit, "handleSubmit");
    };

    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    placeholder="username"
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                    />
                    <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                    />
                    <button> Login In </button>
                </form>
            </div>
        );

};

export default Login; 