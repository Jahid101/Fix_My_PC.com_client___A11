import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const ServiceList = () => {

    const [service, setService] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:9999/serviceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data))
    }, [loggedInUser.email])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 className="ml-5 mb-5">Total Booked Service : {service.length}</h2>
                <h4 className="mb-4 form-control text-light bg-info w-75">
                    <strong>
                        <span className="ml-4 mb-5">Service Name</span>
                        <span style={{ marginLeft: '85px' }}>Booking Time</span>
                        <span style={{ marginLeft: '180px' }}>Order Status</span>
                    </strong>
                </h4>
                {
                    service.map(service =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h6 className="m-5">{service.service}</h6>
                            <h6 className="m-5">{service.orderTime}</h6>
                            <button className="btn btn-primary m-5">Pending...</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceList;
