import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog-container container">
                <div className="blog-header-text">
                    <h4 className="blog-header-title">Our Blog</h4>
                    <h2>Latest News & Articles</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod enim tempor incididunt ut labore et dolore magna aliqua</p>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-cart border border">
                            <div className="cart-image">
                                <img className="w-75 cart-img" src="https://i.ibb.co/9wwYGFz/medical-council.jpg" alt="" />
                            </div>
                            <h6 className="topic">Medical</h6>
                            <h5>Best Medical Network Directory For Physicians & Clients</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <button className="service-button">Read more..</button>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-cart border border">
                            <div className="cart-image">
                                <img className="w-75 cart-img" src="https://i.ibb.co/C7Qtg96/disability-and-healthcare.jpg" alt="" />
                            </div>
                            <h6 className="topic">Insight</h6>
                            <h5>Why Primary Health Care Is Very Important in Our life?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <button className="service-button">Read more..</button>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-cart border border">
                            <div className="cart-image">
                                <img className="w-75 cart-img" src="https://i.ibb.co/TWJdzcx/psychologist-and-patient-talking-in-clinic-mental-health-concept.jpg" alt="" />
                            </div>
                            <h6 className="topic">Health</h6>
                            <h5>6 Tips to Protect Your Mental Health When You’re Sick</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                            <button className="service-button">Read more..</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;