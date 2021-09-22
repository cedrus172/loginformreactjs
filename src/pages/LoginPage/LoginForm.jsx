import React from 'react';

function LoginForm(props) {
    return (
        <>
             <form className="loginFrm">
                <div className="form-input">
                    <label htmlFor="emailTxt">Your Email Address</label>
                    <input type="text" name="emailTxt" />
                </div>      
                <div className="form-input">
                    <label htmlFor="passwordTxt">Create Password</label>
                    <input type="password" name="passwordTxt" />
                </div>     
                <div className="form-input">
                    <p>
                        By clicking Create Account, I agree to the <a href="/#"> Temp of<br/>
                        Service</a> and <a href="/#">Privacy Policy</a>
                    </p>
                </div>  
                <div className="form-input">
                    <input type="button" value="Create Account" />
                </div>         
            </form>

        </>
    );
}

export default LoginForm;