import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSidebar = () => {
    return (
        <div className=" d-block">
            <Link className="nav-item nav-link" to="/dashboard/book">Book</Link>
            <Link className="nav-item nav-link" to="/dashboard/bookingList">Booking List</Link>
            <Link className="nav-item nav-link" to="/dashboard/customerReview">Review</Link>
        </div>
    );
};

export default CustomerSidebar;