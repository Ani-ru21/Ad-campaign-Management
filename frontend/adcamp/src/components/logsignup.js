import React, { useState } from "react";
import './logsignup.css';
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import pass_icon from './Assets/password.png';

const Logsignup = () => {
    const [action,setAction] = useState("Login");
return(
    <div className="page">
    <div className="container">
        <div className="header">
        <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
                <div className="inputs">
                    {action ==="Login"?<div></div>: <div className="input">
                        <img src={user_icon} alt="user"/>
                        <input type = "text" placeholder="Name" required/>
                    </div>}
                    <div className="input">
                        <img src={email_icon} alt="email"/>
                        <input type = "email" placeholder="Email id" required/>
                    </div>
                    <div className="input">
                        <img src={pass_icon} alt="password"/>
                        <input type = "password"  placeholder="Password" required/>
                    </div>
                </div>
        {action === "Sign Up"?<div></div> :<div className="forgot-password">Forgot password?<span>click Here!</span>
        </div>}
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"}onClick={() =>setAction("Sign Up")}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"}onClick={() =>setAction("Login")}>Login</div>
        </div>
    </div>
    </div>
)

}

export default Logsignup;