import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('https://morning-brushlands-06822.herokuapp.com/feedback')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    return (
        <div>
            <div className="mt-5 testimonialBg ">
                <h1 className="text-center mb-3" style={{color: 'black', fontSize:'50px'}}>Testimonials</h1>
                <div className="row">
                    {
                        testimonial.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
