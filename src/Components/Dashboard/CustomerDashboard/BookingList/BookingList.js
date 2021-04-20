import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import SingleBooking from './SingleBooking';

const BookingList = () => {

    const [loggedInUser,setLoggedInUser] =  useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    
    

    useEffect(() => {
        fetch('http://localhost:4444/allBookings?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
                console.log(data,'data')
            })
    }, []);
    
    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
            <CustomerSidebar></CustomerSidebar>
        </div>
        <div style={{backgroundColor:'salmon',padding:'20px',height:'100%'}} className="col-md-7 d-flex flex-wrap justify-content-center">

           {
               orders.map(order =>  <SingleBooking order={order}></SingleBooking>)
           }
        </div>
    </div>
    );
};

export default BookingList;