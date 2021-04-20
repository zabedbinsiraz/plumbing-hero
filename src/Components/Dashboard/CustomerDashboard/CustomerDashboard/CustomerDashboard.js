import React from 'react';
import { Route, Switch } from 'react-router';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import CustomerReview from '../CustomerReview/CustomerReview'
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const CustomerDashboard = () => {
    return (
        <div>
          

          <Switch>
             

          <Route path="/dashboard/bookingList">
                <BookingList></BookingList>
            </Route>
            <Route path="/dashboard/customerReview">
                <CustomerReview></CustomerReview>
            </Route>
           

          </Switch>
        </div>
    );
};

export default CustomerDashboard;