import { useState } from "react";
import Navbar from "./Navbar"
import Footer from "./navbar/Footer"
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    var [mail,setMail]=useState('');
    var [passw,setPassw]=useState('')
    var [error,setError]=useState('')
    var user={
        email:"spandana@gmail.com",
        passwo:"Spandana@2002"
    };
    const logsubmit=()=>{
        if(mail==user.email &&  passw==user.passwo)
            navigate('/')
        else{
            setError('Invalid email or password');
        }
    }
    return(
        <>
        <Navbar></Navbar>
        <div className="login">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form className="login-form">
                <div className="log">
                <p className="login-head">LOGIN</p>
                <input type="text" placeholder="Your Email" className="mail-login" 
                onChange={(e)=>setMail(e.target.value)}></input><br></br>
                <input type="text" placeholder="Password"className="mail-login"
                onChange={(e)=>setPassw(e.target.value)}></input><br></br>
                <button className="login-button" onClick={logsubmit}>Login</button></div>
            </form></div>
        <Footer></Footer>
        </>
    )
}
export default Login