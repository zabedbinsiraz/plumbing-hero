import React from 'react';
import PrivateRoute from '../../Home/PrivateRoute/PrivateRoute';
import AdminDashboard from '../AdminDashboard/AdminDashboardMain/AdminDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard/CustomerDashboard';


const Dashboard = () => {
    return (
        <div>
         
        <PrivateRoute>
        <AdminDashboard></AdminDashboard>
    
    <CustomerDashboard></CustomerDashboard>
        </PrivateRoute>
        
         
        </div>
    );
};

export default Dashboard;