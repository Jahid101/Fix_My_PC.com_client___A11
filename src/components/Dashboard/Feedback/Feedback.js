import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const Feedback = () => {

    const [dbStatus, setDbStatus] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // console.log(loggedInUser);

    const handleFeedbackSubmit = e => {
        const feedbackInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            description: e.target.description.value
        };

        console.log(feedbackInfo);

        const url = `https://morning-brushlands-06822.herokuapp.com/addFeedback`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    e.target.reset();
                    alert('Feedback added successfully.')
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Your Feedback</h2>
                <br />
                <form onSubmit={handleFeedbackSubmit}>
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" name="name" placeholder={loggedInUser.displayName} aria-label="First name" required />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Feedback</h5>
                    <input type="text" class="form-control w-50" placeholder="Description" name="description" aria-label="Last name" required />

                    <br />
                    <input className="btn btn-info mb-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;
