import Navbar from "./Navbar"
import Footer from "./navbar/Footer"

function Login(){
    return(
        <>
        <Navbar></Navbar>
        <div className="login">
            <form className="login-form">
                <div className="log">
                <p className="login-head">LOGIN</p>
                <input type="text" placeholder="Your Email" className="mail-login"></input><br></br>
                <input type="text" placeholder="Password"className="mail-login"></input><br></br>
                <button className="login-button">Login</button></div>
            </form></div>
        <Footer></Footer>
        </>
    )
}
export default Login