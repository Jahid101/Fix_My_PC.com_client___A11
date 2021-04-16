import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import PaymentProcess from '../Payment/PaymentProcess';

const ServiceBooking = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [shippingData, setShippingData] = useState(null);
    const [service, setService] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/serviceBooking/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])


    const handlePayment = paymentId => {
        // const bookingDetails = {
            // name: loggedInUser.name,
            // // email: loggedInUser.email,
            // paymentId,
            // orderTime: new Date()
        // };

        // fetch('http://localhost:9999/addOrder', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookingDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             alert('Your order placed successfully')
        //         }
        //     })
    }

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Service Booking</h2>
                <br />
                <form>
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" name="name" value={loggedInUser.displayName} aria-label="First name" required />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Service Name</h5>
                    <input type="text" class="form-control w-50" value={service.name} name="description" aria-label="Last name" required />
                    <br />

                    <h5>Phone</h5>
                    <input type="number" class="form-control w-50" placeholder="Your Phone" name="description" aria-label="Last name" required />
                </form>
                <div>
                    <h3>Payment</h3>
                    <PaymentProcess handlePayment={handlePayment}></PaymentProcess>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;
