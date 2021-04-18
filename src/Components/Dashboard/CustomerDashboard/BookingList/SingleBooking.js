import React from 'react';
import image from '../../../../images/drainage.jpg';

const SingleBooking = () => {
    return (
        <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={image} className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>Water Heater Services</h3>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
          </div>
        </div>
    );
};

export default SingleBooking;