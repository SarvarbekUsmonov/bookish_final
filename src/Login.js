import React from 'react'
import { useRef } from 'react';


function Login(){
    const usernameRef = useRef('null');
    const passwordRef = useRef('null');
    async function handleLoginAccount(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const response = await fetch('http://167.99.60.236:4000/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await response
        if(data.status == 200){
            window.location.href = "/"
        }else{
            alert('Username or Password is incorrect')
        }
    }
    return(
        // create a form for the user to login
        <div id='loginPage'>
            <div id='loginText'>Login</div>
            <form id="loginForm">
                <label for="username">Username</label>
                <input ref={usernameRef} type="text" name="username" id="loginUsername" placeholder="Username" required></input>
                <label for="password">Password</label>
                <input ref={passwordRef} type="password" name="password" id="loginPassword" placeholder="Enter Password Here" required></input>
                <button id="loginBtn" type="button" onClick={handleLoginAccount}>Log in</button>
                <a href="./signUp" id='signupLink'>Don't have an account? Sign up here.</a>
            </form>
            <div id="copyrightDate">2023</div>
        </div>
    )
}

export default Login;