import logoImage from "./images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {faLock, faEye, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import './styles/login.css'
import { useState } from "react"
 
function Reg() {
    const [showPassword, setShowPassword] = useState(false);
    console.log(showPassword)
    return (
    <>
    <div className="container">
     <div className="logo">
        <img src={logoImage} alt="" />
     </div>

     <h1>Create Account</h1>
     <p>Please enter correct identity details to create account</p>

     <form action="">
     

     <div className="email-box box">
        <label htmlFor="">Username</label>



        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faUser}/>}</span>
            <input type="text" placeholder="@Nuellee_25"/>
        </div>
     </div>

      <div className="email-box box">
        <label htmlFor="">Email</label>



        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faEnvelope}/>}</span>
            <input type="email" placeholder="nuellee25@gmail.com"/>
        </div>
     </div>

     <div className="email-box box">
        <label htmlFor="">Phone Number</label>



        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faPhone}/>}</span>
            <input type="phone number" placeholder="+2349134222588"/>
        </div>
     </div>

     <div className="password-box box">
        <label htmlFor="">Password</label>
        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faLock}/>}</span>
            <input type={showPassword ? "text" : "password"} 
             placeholder="🔒🔒🔒🔒🔒🔒🔒🔒🔒" />
            <span onClick={()=>setShowPassword(!showPassword)}>{<FontAwesomeIcon icon={faEye}/>}</span>
        
        </div>
     </div>

     <div className="password-box box">
        <label htmlFor="">Confirm Password</label>
        <div className="input-box">
            <span>{<FontAwesomeIcon icon={faLock}/>}</span>
            <input type={showPassword ? "text" : "password"} 
             placeholder="🔒🔒🔒🔒🔒🔒🔒🔒🔒" />
            <span onClick={()=>setShowPassword(!showPassword)}>{<FontAwesomeIcon icon={faEye}/>}</span>
        
        </div>
     </div>

     
     <button className="login-btn">
        Click to access{" "}
        <span>{<FontAwesomeIcon icon={faArrowRight}/>}</span>
    </button>
     </form>
     <div className="no-account">
        <p>Already Have an Account?</p>
        <NavLink to= '/login'>Login</NavLink>
     </div>
     </div>
    </>
    );
}

export default Reg;