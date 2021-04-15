import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    return (
        <div>
            <div className="mt-5 testimonialBg ">
                <h1 className="text-center mb-3">Testimonials</h1>
                <div className="">
                    <TestimonialCard></TestimonialCard>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;