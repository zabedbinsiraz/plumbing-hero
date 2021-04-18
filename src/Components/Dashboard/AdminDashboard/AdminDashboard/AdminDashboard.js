import React from 'react';
import OrdersList from '../OrdersList/OrdersList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import { Route, Switch } from 'react-router';

const AdminDashboard = () => {
    return (
        <div>
            

        <Switch>

        <Route path="/dashboard/ordersList">
              <OrdersList></OrdersList>
          </Route>
          <Route path="/dashboard/addService">
             <AddService></AddService>
          </Route>
          <Route path="/dashboard/makeAdmin">
              <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/dashboard/manageServices">
              <ManageServices></ManageServices>
          </Route>

        </Switch>
      </div>
    );
};

export default AdminDashboard;