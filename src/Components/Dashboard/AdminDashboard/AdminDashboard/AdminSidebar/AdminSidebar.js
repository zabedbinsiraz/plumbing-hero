import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className=" d-block">
        <Link className="nav-item nav-link" to="/dashboard/ordersList">Order List</Link>
        <Link className="nav-item nav-link" to="/dashboard/addService">Add Service</Link>
        <Link className="nav-item nav-link" to="/dashboard/makeAdmin">Make Admin</Link>
        <Link className="nav-item nav-link" to="/dashboard/manageServices">Manage Services</Link>
    </div>
    );
};

export default AdminSidebar;