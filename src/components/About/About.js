import React from 'react';
import Navber from '../Navber/Navber';
import './About.css'
import doc1 from '../../images/doc1.jpg'
import doc2 from '../../images/doc2.jpg'
import doc3 from '../../images/doc3.jpg'
import Blog from '../Blogs/Blog';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <Navber></Navber>
                <div className="header">
                    <h1>About us</h1>
                    <h5>Home -- About us</h5>
                </div>
                <div className="about-description container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about-img">
                                <img className="w-100 about-img" src="https://i.ibb.co/RvrShjW/diverse-medical-team-of-doctors-looking-at-camera-while-holding-clipboard-and-medical-files-e1623252.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about-text p-5 text-start">
                                <h4 className="about-title">About MedicaLife</h4>
                                <h2>We Provide Essential Services For <br /> Your Health Care</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>


                                <div className="row mb-5 ">
                                    <div className="col-md-6">
                                        <h5>Quality of Care Services</h5>
                                        <p>Lorem ipsum dolor sit amet, consecte adipiscing eli</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Standards of Treatment</h5>
                                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Infection Prevention</h5>
                                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>24/7 Working Time</h5>
                                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                    </div>

                                </div>
                                <h5>24 Hours Emergency Assistance Call Us</h5>
                                <h5>We are committed to providing healthcare service</h5>
                                <h5>Really know the true needs and expectations of patients</h5>
                                <button className="service-button">More About us</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="our-doc">
                    <div className="our-doc-container">
                        <div className="our-doc-header">
                            <h4>Our Doctors</h4>
                            <h2>Meet With Our Doctor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="our-doc-about container">
                            <div className="row mb-5">
                                <div className="col-md-4">
                                    <div className="about-cart blog-cart">
                                        <div className="doc-img">
                                            <img className="w-50 doc-img" src={doc1} alt="" />
                                        </div>
                                        <div className="doc-des">
                                            <h5 className="about-title">Cardiology</h5>
                                            <h3>Dr. Ryley Mueller</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-cart blog-cart">
                                        <div className="doc-img">
                                            <img className="w-50 doc-img" src={doc2} alt="" />
                                        </div>
                                        <div className="doc-des">
                                            <h5 className="about-title">Dentist</h5>
                                            <h3>Dr. Elisa Hodges</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-cart blog-cart">
                                        <div className="doc-img">
                                            <img className="w-50 doc-img" src={doc3} alt="" />
                                        </div>
                                        <div className="doc-des">
                                            <h5 className="about-title">General Doctor</h5>
                                            <h3>Dr. Carlo Hilton</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="service-button">View All Doctors</button>
                            <hr />

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

export default About;