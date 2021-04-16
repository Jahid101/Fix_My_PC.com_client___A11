import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faCommentDots, faShoppingCart, faList, faPlus, faTasks, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);



    // useEffect(() => {
    //     if (loggedInUser.email === 'jahidhasananik.official@gmail.com') {
    //         setIsAdmin(true);
    //     }
    //     else {
    //         setIsAdmin(false);
    //     }
    // }, [loggedInUser.email])


    
    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));
    // }, [loggedInUser.email])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                {/* {!isAdmin && <div> */}
                    <li>
                        <Link to="/serviceBooking" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>
                                Service Booking
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>
                                Service list
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Feedback</span>
                        </Link>
                    </li>
                {/* </div>
                } */}

                {/* {isAdmin && <div> */}
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                        </Link>
                    </li>
                {/* </div>
                } */}

            </ul>
        </div>
    );
};

export default Sidebar;
