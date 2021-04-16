import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faCommentDots, faShoppingCart, faList, faPlus, faTasks, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';



const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState([]);
    const [admin, setAdmin] = useState(false);


    useEffect(() => {
        fetch('http://localhost:7777/admin')
            .then(res => res.json())
            .then(data => {
                data.map(admin => setIsAdmin(admin))
            })
    }, [])

    // console.log(isAdmin.email);

    // useEffect(() => {

            // if (loggedInUser.email === isAdmin.email) {
            //     setAdmin(true);
            // }
            // else {
            //     setAdmin(false);
            // }
            // console.log(admin);

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
