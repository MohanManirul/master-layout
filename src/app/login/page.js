'use client'
import React from 'react';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

const login = () => {

    let router = useRouter();

    const login =()=>{
        router.push("/dashboard");
    }

    return (
        <div>
            
             <p>Login here</p>
            <form >
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
            </div>
           
            </form> 
            <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
        </div>
    );
};

export default login;