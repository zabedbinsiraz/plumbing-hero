import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PrivateRoute from '../../Home/PrivateRoute/PrivateRoute';
import AdminDashboard from '../AdminDashboard/AdminDashboardMain/AdminDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard/CustomerDashboard';


const Dashboard = () => {
    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    // const [admin,setAdmin] = useState({});
    // const [loading,setLoading] = useState(true);


    // useEffect(() => {
    //     fetch('http://localhost:4444/allAdmin?email='+loggedInUser.email)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data[0])
    //             setLoading(false)
    //             console.log(data[0],'data')
    //         })
    // }, []);
    return (
        <div>
         
        
        <AdminDashboard></AdminDashboard>
    
    <CustomerDashboard></CustomerDashboard>
       
        
         
        </div>
    );
};

export default Dashboard;