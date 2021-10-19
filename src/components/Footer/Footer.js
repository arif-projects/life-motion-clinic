import React from 'react';
import './Footer.css'
import logo from '../../images/logon.png'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="app-container">
                                <div className="col-md-6">
                                    <img className="w-75" src={logo} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h3>Life Motion Clinic</h3>
                                    <p>Best Medical & Healthcare Service
                                        For Your Family</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <h5>Contact Details</h5>
                            <p>Jl. Raya Kuta No.70, Kuta</p>
                            <p>support@domain.com</p>
                            <p>8 AM - 5 PM , Monday - Saturday</p>
                            <p>(+021) 2336 278</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Other Pages</h5>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Services</p>
                            <p>Login</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Make Appointment</h5>
                            <p>call us.</p>
                            <p>(+021) 2336 278</p>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>Life Motion Clinic by Mohammad Arif</p>
                    </div>
                    <div className="col-md-6">
                        <p>Copyright &copy; 2021 All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;