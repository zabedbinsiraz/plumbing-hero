import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark  navbar-container">
        <div className="container-fluid ">
          <div className="col-md-4 col-sm-12">
          <a className="navbar-brand" href="#">Plumbing-Hero</a>
          <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
          </div>
         


          <div className="collapse navbar-collapse col-md-7 col-sm-12" id="navbarSupportedContent">
      
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-wrap">
              <li className="nav-item  ms-5">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Reviews</a>
              </li>
             
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">Login</a>
              </li>
           
            </ul>
            
          </div>
         
        </div>
      </nav>
    );
};

export default Navbar;