import React from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard/CustomerDashboard';

const Dashboard = () => {
    return (
        <div>
            This is Dashboard
            <CustomerDashboard></CustomerDashboard>
            <AdminDashboard></AdminDashboard>
        </div>
    );
};

export default Dashboard;