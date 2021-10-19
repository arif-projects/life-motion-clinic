import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner container d-flex  align-items-center">
                <div className="row">
                    <div className="col-md-10 text-start">
                        <h1 className="banner-title">Life Motion Clinic</h1>
                        <h4 className="subtitle">Best Medical & Healthcare Service <br /> For Your Family</h4>
                        <button className="contact-button">Contact us</button>
                    </div>
                    {/* <div className="col-md-2"></div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;