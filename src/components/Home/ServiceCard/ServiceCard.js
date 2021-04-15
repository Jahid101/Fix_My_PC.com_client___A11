import React from 'react';
import displayFix from '../../../images/displayFix.jpg';

const ServiceCard = () => {
    return (
        <div>
            <div class="row container cardInfo mt-5 p-3 btn">
                <div>
                    <img src={displayFix} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Display Repair</h3>
                        <h5 className=" mt-4">Don't panic, Just relaxed when your device is need to be fixed.</h5>
                    </div>
                </div>
            </div>
            <div class="row container cardInfo mt-5 p-3 btn">
                <div>
                    <img src={displayFix} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Display Repair</h3>
                        <h5 className=" mt-4">Don't panic, Just relaxed when your device is need to be fixed.</h5>
                    </div>
                </div>
            </div>
            <div class="row container cardInfo mt-5 p-3 btn">
                <div>
                    <img src={displayFix} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Display Repair</h3>
                        <h5 className=" mt-4">Don't panic, Just relaxed when your device is need to be fixed.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
