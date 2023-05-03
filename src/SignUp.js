import React, { useRef, useState } from 'react'


function SignUp(){
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    async function handleSignUp(){
        const username = userRef.current.value;
        const password = passwordRef.current.value;
        const response = await fetch(`http://localhost:4000/signup`,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log(response)
        if (response.status != 200){
            alert('User already exists');
        }
        else{
            window.location.href = '/login';
        }
    }
    
    return(
        // create a form for the user to login
        <div id='signupPage'>
            <div class="header">Create Account</div>
            <form id="signupForm">
                <label for="username">Username</label>
                <input ref={userRef} type="text" name="username" id="signupUsername" placeholder="Username"></input>
                <label for="password">Password</label>
                <input ref={passwordRef} type="password" name="password" id="signupPassword" placeholder="Enter Password Here"></input>
                <button type="button" onClick={handleSignUp}>Sign up</button>
                <a href="./login">Login</a>
            </form>
            <div id="copyrightDate">2023</div>
        </div>
    )
}
export default SignUp