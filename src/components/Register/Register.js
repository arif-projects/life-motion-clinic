import React, { useState } from 'react';
import Blog from '../Blogs/Blog';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import banner from '../../images/login.jpg'
import './Register.css'
import Navber from '../Navber/Navber';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';
initializeFirebase();





const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();



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

    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, photoURL, emailVerified } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(userInfo);

            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div>
            <div className="login-container">
                <Navber></Navber>
                <div className="header">
                    <h2>Register :{user.email}</h2>
                    <h6>Home--Register</h6>
                </div>
                <div className="login-form">
                    <div className="container mb-5">
                        <h2 className="text-danger mb-5">Register Here.</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-container ">
                                    <form onSubmit={handleRegistration}>
                                        <input onChange={handleEmailChange} className="input-field mt-3" type="email" name="" placeholder="Your Email" id="" required />
                                        <br />
                                        <input onChange={handlePasswordChange} className="input-field mt-3" type="password" placeholder="Password" name="" id="" required />
                                        <br />
                                        <p>{error}</p>
                                        <input className="appointment-button mt-3" type="submit" value="Register" />
                                        <Link to="/login">
                                            <li>already registerd? Login.</li>
                                        </Link>
                                    </form>
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

export default Register;