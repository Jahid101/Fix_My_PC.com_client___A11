import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const OrderList = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/orderList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 className="ml-5 mb-5">Total Booked Service : {order.length}</h2>
                <h4 className="mb-4"><span className="ml-4 mb-5">Service Name</span> <span style={{ marginLeft: '65px' }}>Booking Time</span> <span style={{ marginLeft: '85px' }}>Order Status</span> </h4>
                {
                    order.map(order =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h6 className="m-5">{order.service}</h6>
                            <h6 className="m-5">{order.orderTime}</h6>
                            <button className="btn btn-primary m-5">Pending...</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OrderList;
