import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
       <section className="row  d-flex flex-wrap justify-content-center d-grid gap-2 footer-container mt-5 p-5">
            <div className="col-md-3">
           <p> <i class="fas fa-map-marker-alt"></i></p>
            <strong>Road #01,(2nd floor),City Center</strong>
            <strong>Zindabazar,Sylhet,Bangladesh</strong>
             
            </div>
            <div className="col-md-2">
                <h6>Company</h6>
            <p>About</p>
             <p>Project</p>
             <p>Our Team</p>
             <p>Terms and Conditions</p>
             <p>Submit listing</p>
             
            </div>
            <div className="col-md-2">
            <h6>Quick Links</h6>
            <p>Quick links</p>
            <p>Rentals</p>
             <p>Sales</p>
             <p>Our Blogs</p>
             <p>Contacts</p>
             
            </div>
            <div className="col-md-2">
            <h6>About Us</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint est, voluptate vel nulla quaerat dignissimos.</p>
             <p><i class="fab fa-facebook m-1 p-1"></i>
             <i class="fab fa-twitter m-1 p-1"></i>
             <i class="fab fa-youtube m-1 p-1"></i>
             <i class="fab fa-linkedin m-1 p-1"></i></p>
             
            </div>
          
       </section>
    );
};

export default Footer;