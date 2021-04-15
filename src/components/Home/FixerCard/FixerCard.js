import React from 'react';
import fixer1 from '../../../images/fixer1.jpg';


const FixerCard = () => {
    return (
        <div>
            <div class="row container fixerCardInfo mt-5 p-3 btn">
                <div>
                    <img src={fixer1} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Dalwer Bot</h3>
                        <h6 className=" mt-4">CHIEF ENGINEER</h6>
                    </div>
                </div>
            </div>
            <div class="row container fixerCardInfo mt-5 p-3 btn">
                <div>
                    <img src={fixer1} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Dalwer Bot</h3>
                        <h6 className=" mt-4">CHIEF ENGINEER</h6>
                    </div>
                </div>
            </div>
            <div class="row container fixerCardInfo mt-5 p-3 btn">
                <div>
                    <img src={fixer1} alt="" />
                    <div>
                        <h3 className="text-center mt-4">Dalwer Bot</h3>
                        <h6 className=" mt-4">CHIEF ENGINEER</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixerCard;
