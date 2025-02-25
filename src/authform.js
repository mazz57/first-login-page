
import React, { useState } from 'react';


export default function AuthForm() {
    const [islogin, setIslogin] = useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className= {islogin ? 'active' : ''} onClick={() => setIslogin(true)}>Login</button>
                <button className= {!islogin ? 'active' : ''} onClick={() => setIslogin(false)}>signup</button>
            </div>
            <div className='form'>
                {islogin ? <>
                    <h2>Login Form</h2>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <a href='#' onClick={() => setIslogin(false)}>Forgot Password?</a>
                    <button type='submit'>Login</button>
                </> : ""}
            </div>

            <div className='form'>
                {!islogin ? <>
            <h2>Signup Form</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' /> I
            <button>SignUp</button>
            </> : ""}
            </div>
        </div>
    </div>
  )
};  

