import React from 'react';
import './SubBanner.css'

const SubBanner = () => {
    return (
        <div>
            <div className="subBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="Doctors_Timetable">
                                <h3>Doctors Timetable</h3>
                                <p>Please view our timetable and contact us to make an appointment with your preferred doctor. Timetable. Doctor, Monday, Tuesday, Wednesday, Thursday, Friday.</p>
                                <button className="contact-button">View timeline</button>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="Emergency_Call">
                                <h3>Emergency Call</h3>
                                <p>Call 999 in a medical emergency. This is when someone is seriously ill or injured and their life is at risk. Medical emergencies can include: loss of ...</p>
                                <button className="contact-button">Call now</button>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="Make_Appointment">
                                <h3>Make An Appointment</h3>
                                <p>Book your Hotel in Hospital online. No reservation costs. Great rates. Read Real Guest Reviews. No Booking Fees. Apartments. We speak your language. Bed and Breakfasts. Hostels. Motels. Hotels. Secure Booking. 24/7 Customer Service. </p>
                                <button className="contact-button">Get Started</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;