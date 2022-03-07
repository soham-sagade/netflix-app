import "./register.scss";
import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ArrowForwardIosOutlined } from "@material-ui/icons";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [username, setUsername] = useState('');
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
  

  const handleFirst = (e) => {
      e.preventDefault();
      setEmail(emailRef.current.value);
  }

  const handleSecond = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        console.log(email, passwordRef.current.value,usernameRef.current.value);
        try {
            await axios.post('/register', {
                email,
                username: usernameRef.current.value,
                password: passwordRef.current.value            
            })
        } catch (error) {
            console.log(error);
        }
        history.push('/login');

    }
  
    return (
    <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png" alt=""/>
                <button className="loginbutton"><Link to="/login" className="loginlink">Sign in</Link></button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder="Enter email" ref={emailRef} />
                        <button className="registerbutton" onClick={handleFirst}>Get Started <span><ArrowForwardIosOutlined /></span></button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="text" placeholder="Username" ref={usernameRef} />
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="registerbutton" onClick={handleSecond}>Start Membership</button>
                    </form>
                )
            }
            
        </div>
    </div>
  )
}

export default Register