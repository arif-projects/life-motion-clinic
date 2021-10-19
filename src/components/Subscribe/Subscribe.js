import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="subscribe-text">
                            <h3>Subscribe To Our Newsletter</h3>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do <br /> eiusmod tempor incidiunt ut labore</p>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="subscribe-input">
                            <input className="p-3 s-input" type="text" placeholder="Your Email Address" /> <button className="subscribe-button">Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;