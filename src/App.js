import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import CustomerDashboard from './Components/Dashboard/CustomerDashboard/CustomerDashboard/CustomerDashboard';

function App() {
  return (
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
        <Route path="/customerDashboard">
          <CustomerDashboard></CustomerDashboard>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
