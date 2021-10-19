import React, { useContext } from 'react';
import './Navber.css'
import logo from '../../images/logon.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Navber = () => {
    const [login, setLogin] = useContext(userContext);
    return (
        <div>
            <div className="row nav-container">
                <div className="col-md-2 col-lg-2 col-sm-12">
                    <div className="logo p-3">
                        <img className="w-75" src={logo} alt="" />
                    </div>
                </div>
                <div className="col-md-10  col-lg-10 col-sm-12">
                    <div className="nav-items me-5">
                        <ul className="d-flex link align-items-end justify-content-end">
                            <Link className="nav-element" to="/home">
                                <li className="items m-2 p-2">Home</li>
                            </Link>

                            <Link className="nav-element" to="/about">
                                <li className="items m-2 p-2">About us</li>
                            </Link>

                            <Link className="nav-element" to="/services">
                                <li className="items m-2 p-2">Services</li>
                            </Link>

                            <Link className="nav-element" to="/appointment">
                                <li className="items m-2 p-2">Appointment</li>
                            </Link>
                            {
                                login.email ? <Link className="nav-element" to="/login">
                                    <li className="items m-2 p-2">LogOut</li>
                                </Link> : <Link className="nav-element" to="/login">
                                    <li className="items m-2 p-2">Login</li>
                                </Link>
                            }
                            <Link className="nav-element" to="/register">
                                <li className="items m-2 p-2">Register</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;