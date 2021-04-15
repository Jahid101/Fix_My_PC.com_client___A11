import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    return (
        <div className="mt-5 serviceBg">
            <div className="container">
                <h1 className="text-center mb-3">OUR SERVICES</h1>
                <div className="">
                    <ServiceCard></ServiceCard>
                </div>
            </div>
        </div>
    );
};

export default Services;
