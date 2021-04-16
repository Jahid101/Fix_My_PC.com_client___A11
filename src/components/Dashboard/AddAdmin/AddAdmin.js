import React from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const AddAdmin = () => {
    return (
        <div>
            <Dashboardpage></Dashboardpage>
            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Add a Admin</h2>
                <br />
                <form>
                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Email" name="email" aria-label="First name" required />

                    <br />
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;
