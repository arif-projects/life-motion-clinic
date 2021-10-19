import React from 'react';
import Navber from '../Navber/Navber';
import './Appointment.css'
import image from '../../images/doc4.jpg'
import Blog from '../Blogs/Blog';
import Footer from '../Footer/Footer';

const Appointment = () => {
    return (
        <div>
            <div className="appointment">
                <Navber></Navber>
                <div className="header">
                    <h2>Appointment</h2>
                    <h6>Home--Appointment</h6>
                </div>
                <div className="work">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-6 text text-start">
                                <h4 className="about-title">How We Work</h4>
                                <h2>A Comprehensive Directory For Your Health Care</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h4>Book an Appointment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h4>Conduct Checkup</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h4>Perform Treatment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h4>Prescribe & Payment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            </div>
                            <div className="col-md-6">
                                <div className="work-image">
                                    <img className="w-100 work-image" src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="appoinment-form">
                            <div className="container">
                                <h3 className="text text-primary">Make Appointment & Take Care <br /> Of Your Healthy Life</h3>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="appoinment-image mt-5 pt-5">
                                            <img className="w-75 appoinment-image" src="https://i.ibb.co/HdwyDjg/group-of-doctors-standing-in-corridor-on-medical-conference-e1623252293962-p8f2fxhnlus74x16zbrrh8fkm.jpg" alt="" />
                                        </div>
                                    </div>


                                    <div className="col-md-6 text-start p-5">
                                        <form action="">
                                            <input className="input-field mt-3" type="text" placeholder="Your name" /><br />

                                            <input className="input-field mt-3" type="email" name="" id="" placeholder="Your email" /> <br />

                                            <input className="input-field mt-3" type="text" placeholder="Your phone" /> <br />

                                            <input className="input-field mt-3" type="datetime" name="" placeholder="Date" id="" /> <br />

                                            <input className="input-field mt-3" type="text " placeholder="Select service" /> <br />

                                            <input className="input-field mt-3" type="text " placeholder="Select Doctor" /> <br />

                                            <textarea className=" mt-3 textarea" name="" placeholder="Additional details" id="" cols="30" rows="10"></textarea> <br />

                                            <input className="appointment-button" type="submit" value="Make Appointment" />
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <Blog></Blog>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Appointment;