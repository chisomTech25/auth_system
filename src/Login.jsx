import logoImage from "./images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {faLock, faEye, faArrowRight, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import './styles/login.css'
import { NavLink } from 'react-router-dom';
import { useState } from "react"
 
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    console.log(showPassword)
    return (
    <>
    <div className="container">
     <div className="logo">
        <img src={logoImage} alt="" />
     </div>

     <h1>Welcome back, Learner</h1>
     <p>Login to continue your courses and track your daily streak</p>
     <form action="">
     <div className="email-box box">
        <label htmlFor="">Email</label>

        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faEnvelope}/>}</span>
            <input type="email" placeholder="Nuellee@uce.com"/>
        </div>
     </div>

     <div className="password-box box">
        <label htmlFor="">Password</label>
        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faLock}/>}</span>
            <input type={showPassword ? "text" : "password"} 
            placeholder="🔒🔒🔒🔒🔒🔒🔒🔒🔒" />
            <span onClick={()=>setShowPassword(!showPassword)}>{<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>}</span>
        
        </div>
     </div>

     <div className="remember">
        <div className="re-box">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
        </div>

        <button>Forgot Password?</button>
     </div>
     <button className="login-btn">
        Log in to Learn{" "}
        <span>{<FontAwesomeIcon icon={faArrowRight}/>}</span>
    </button>
     </form>
     <div className="no-account">
        <p>Don't Have an Account</p>
        <NavLink to="/register">Create one</NavLink>
     </div>
     </div>
    </>
    );
}

export default Login;