import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboardMain/AdminDashboard';
import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard/CustomerDashboard';
import CustomerSidebar from '../CustomerDashboard/CustomerSidebar/CustomerSidebar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setAdmin(data[0])
                setLoading(false)
                console.log(data[0], 'data')
            })
    }, []);
    return (
        <div >

            {
                admin.email ? <div className='row'>
                    <div className='col-md-3' style={{width:'100%',backgroundColor:'tomato',padding:'10px'}}>
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className='col-md-8'>
                        <AdminDashboard></AdminDashboard>
                    </div>
                </div>
                    : <div className="row m-2 p-2">
                        <div className="col-md-3">
                            <CustomerSidebar></CustomerSidebar>
                        </div>
                        <div className="col-md-8">
                            <CustomerDashboard></CustomerDashboard>

                        </div>
                    </div>

            }






        </div>
    );
};

export default Dashboard;