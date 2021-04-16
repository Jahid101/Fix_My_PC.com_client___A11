import React from 'react';

const ServiceCard = (props) => {

    const {name, serviceDetails, imageURL} = props.service;

    return (
        <div>
            <div class="row container cardInfo mt-5 p-3 btn">
                <div>
                    <img src={imageURL} alt="" />
                    <div>
                        <h2 className="text-center mt-4">{name}</h2>
                        <h5 className=" mt-4">{serviceDetails}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
