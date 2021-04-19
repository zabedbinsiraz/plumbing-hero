import React from 'react';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import CustomerDashboard from './Components/Dashboard/CustomerDashboard/CustomerDashboard/CustomerDashboard';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser,setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

    <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    
      </UserContext.Provider>

  );
};

export default App;









// https://github.com/Porgramming-Hero-web-course/complete-website-client-zabedbinsiraz

// https://plumbing-hero.firebaseapp.com/

// https://plumbing-hero.web.app/




