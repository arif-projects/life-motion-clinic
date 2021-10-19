import React, { useContext, useState } from 'react';
import Navber from '../Navber/Navber';
import './Login.css'
import banner from '../../images/login.jpg'
import Blog from '../Blogs/Blog';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';
import { userContext } from '../../App';
initializeFirebase();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const [login, setLogin] = useContext(userContext);
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL, emailVerified } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(userInfo);
                setLogin(userInfo);
                history.replace(from);
            })
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const { displayName, email, photoURL, emailVerified } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(userInfo);
                setLogin(userInfo);
                history.replace(from);
                setError("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const { displayName, email, photoURL, emailVerified } = result.user;

                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(userInfo);
                setLogin(userInfo);
                history.replace(from);
            });
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }

    const handlePasswordChange = (e) => {

        if (e.target.value.length < 6) {
            console.error("Hobe naa");
        } else {
            setPassword(e.target.value);
        }
    };
    return (
        <div>
            <div className="login-container">
                <Navber></Navber>
                <div className="header">
                    <h2>Login: {user.name}</h2>
                    <h6>Home--Login</h6>
                </div>
                <div className="login-form">
                    <div className="container mb-5">
                        <h2 className="text-danger mb-5">Login Here.</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-container ">
                                    <form onSubmit={handleLogin}>
                                        <input className="input-field mt-3" type="text" placeholder="Your Name" />
                                        <br />
                                        <input onChange={handleEmailChange} className="input-field mt-3" type="email" name="" placeholder="Your Email" id="" required />
                                        <br />
                                        <input onChange={handlePasswordChange} className="input-field mt-3" type="password" placeholder="Password" name="" id="" required />
                                        <br />
                                        <p>{error}</p>
                                        <input className="appointment-button mt-3" type="submit" value="Login" />

                                        <Link to="/register">
                                            <li>New here? Register</li>
                                        </Link>
                                    </form>
                                    <button className="me-2 signin-button" onClick={handleGoogleSignIn} >
                                        Login with Google
                                    </button>
                                    <button onClick={handleGithubSignIn} className="me-2 signin-button">
                                        Login with Github
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="login-image">
                                    <img className="w-75 login-image" src={banner} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <Blog></Blog>
                    <Subscribe></Subscribe>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Login;