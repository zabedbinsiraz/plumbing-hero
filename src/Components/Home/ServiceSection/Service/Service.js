import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const service = props.service;
    return (
        <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={service.Image} className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>{service.title}</h3>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
            <Link to = "/dashboard/book"  className="btn btn-primary">Get Service</Link>
          </div>
        </div>
    );
};

export default Service;