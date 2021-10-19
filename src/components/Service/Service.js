import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const [fdata, setFdata] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/arif-projects/fakedb/main/fakeDB.json")
            .then((res) => res.json())
            .then((result) => setFdata(result))

    }, [])
    // console.log(fdata);
    return (
        <div>
            <div className="medical_Service">
                <div className="service-header-text mb-10">
                    <h4 className="Service-title">Medical Services</h4>
                    <h2>Our Healthcare Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod <br /> tempor incididunt ut labore dolore magna aliqua</p>

                </div>

                <div className="container">
                    <div className="row">
                        {
                            fdata.map(pd => (<div className="col-md-4">
                                <div className="cart p-3 m-3 border border">
                                    <div className="service-image">
                                        <img className="w-25" src={pd.image} alt="" />
                                    </div>
                                    <h3>{pd.name}</h3>
                                    <p>{pd.description}</p>
                                    <Link to="/services">
                                        <button className="service-button">Get Service</button>
                                    </Link>

                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;