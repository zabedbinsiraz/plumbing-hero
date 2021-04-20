import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
       <section className="row d-flex justify-content-center d-grid gap-2 footer-container mt-5 p-5">
            <div className="col-md-3">
                <small>Location</small>
            </div>
            <div className="col-md-2">
            <small>Company</small>
            </div>
            <div className="col-md-2">
            <small>Quick Links</small>
            </div>
            <div className="col-md-3">
            <small>About Us</small>
            </div>
          
       </section>
    );
};

export default Footer;