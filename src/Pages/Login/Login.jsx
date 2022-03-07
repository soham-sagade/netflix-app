import {useState, useContext} from 'react';
import {AuthContext} from '../../AuthContext/authContext';
import "./login.scss";
import {login} from '../../AuthContext/apiCall'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {dispatch} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);    
    }
    
    return (
    <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png" alt=""/>
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or Phone number" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin}>Sign in</button>
                <span>New to Netflix? <b>Sign Up.</b></span>
                <small> 
                    This page is protected by Google reCAPTCHA to ensure you are npt a bot.
                    <b>Learn More.</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login