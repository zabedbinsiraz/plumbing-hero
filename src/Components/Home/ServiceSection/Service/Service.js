import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const service = props.service;
    const handleGetService = props.handleGetService;
    return (
        <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={service.imageURL} className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>{service.productName}</h3>
            <p className="card-text">{service.desc}</p>
            <button onClick={() => handleGetService(service._id)} className="btn btn-primary" >Get Service</button>
          </div>
        </div>
    );
};

export default Service;