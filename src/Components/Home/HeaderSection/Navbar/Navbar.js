import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Navbar.css';


const Navbar = () => {
  
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  
  
   
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark  navbar-container">
        <div className="container-fluid ">
          <div className="col-md-4 col-sm-12 p-2">
          <a className="navbar-brand" href="#">Plumbing-Hero</a>
          
      
        
          </div>
         
          <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>

          <div className="collapse navbar-collapse col-md-7 col-sm-12" id="navbarSupportedContent">
      
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-wrap">
              <li className="nav-item  ms-5">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
             
             
              <li className="nav-item ms-5">
                <Link className="nav-link" to="#">Contact Us</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/login">{loggedInUser.email? loggedInUser.buyer : 'Login'}</Link>
              </li>
           
            </ul>
            
          </div>
         
        </div>
       
      </nav>
    );
};

export default Navbar;