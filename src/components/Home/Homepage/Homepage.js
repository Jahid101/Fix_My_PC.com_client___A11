import React from 'react';
import Fixer from '../Fixer/Fixer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Homepage = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header></Header>
            <Services></Services>
            <Fixer></Fixer>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
