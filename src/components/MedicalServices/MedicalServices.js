import React from 'react';
import Blog from '../Blogs/Blog';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';
import './MedicalServices.css'

const MedicalServices = () => {
    return (
        <div className="MedicalServices">
            <Navber></Navber>

            <div className="medical-service-container">
                <div className="service-header header">
                    <h2>Medical Services</h2>
                    <h6>Home--Services</h6>
                </div>
                <Service></Service>
            </div>
            <div className="appoinment-form">
                <div className="container">
                    <h3>Make Appointment & Take Care <br /> Of Your Healthy Life</h3>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="appoinment-image mt-5 pt-5">
                                <img className="w-75" src="https://i.ibb.co/HdwyDjg/group-of-doctors-standing-in-corridor-on-medical-conference-e1623252293962-p8f2fxhnlus74x16zbrrh8fkm.jpg" alt="" />
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

                                <textarea className=" mt-3" name="" placeholder="Additional details" id="" cols="30" rows="10"></textarea> <br />

                                <input className="appointment-button" type="submit" value="Make Appointment" />
                            </form>
                        </div>

                    </div>

                </div>
            </div>
            <Blog></Blog>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default MedicalServices;