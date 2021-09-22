import React from 'react';
import "./style.css";
import LoginForm from './LoginForm';
function LoginPage(props) {
    return (
        <div className="loginPage">
            <h1>Create Account</h1>
            <LoginForm/>
            <h3>Already Have An Account ?</h3>
            <a href="/#"><h2>Sign In</h2></a>

        </div>
    );
}

export default LoginPage;