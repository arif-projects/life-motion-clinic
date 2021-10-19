import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import Service from '../Service/Service';
import SubBanner from '../SubBanner/SubBanner';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <Service></Service>
            <Blog></Blog>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;