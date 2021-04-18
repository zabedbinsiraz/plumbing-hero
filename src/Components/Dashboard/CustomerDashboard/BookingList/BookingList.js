import React from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import SingleBooking from './SingleBooking';

const BookingList = () => {
    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
            <CustomerSidebar></CustomerSidebar>
        </div>
        <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">

            <SingleBooking></SingleBooking>
        </div>
    </div>
    );
};

export default BookingList;