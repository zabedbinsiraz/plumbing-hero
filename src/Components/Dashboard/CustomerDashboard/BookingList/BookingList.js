import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import SingleBooking from './SingleBooking';

const BookingList = () => {

    const [loggedInUser,setLoggedInUser] =  useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    
    

    useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allBookings?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
                console.log(data)
            })
    }, []);
    
    return (
       
        <div style={{backgroundColor:'salmon',padding:'20px',height:'100%'}} className="d-flex flex-wrap justify-content-center">
               <h3 className="text-dark">Processing Order</h3>
           {
               orders.map(order =>  <SingleBooking order={order}></SingleBooking>)
           }
        </div>
   
    );
};

export default BookingList;