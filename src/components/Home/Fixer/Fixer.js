import React from 'react';
import FixerCard from '../FixerCard/FixerCard';
import './Fixer.css';


const Fixer = () => {
    return (
        <div>
            <div className="mt-5 fixerBg">
                <h1 className="text-center mb-3">REPAIR EXPERTS</h1>
                <div className="">
                    <FixerCard></FixerCard>
                </div>
            </div>
        </div>
    );
};

export default Fixer;
