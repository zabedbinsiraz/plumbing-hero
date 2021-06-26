import React from 'react';
import './Service.css';
import { useSpring, animated } from 'react-spring'

const Service = (props) => {

  const prop = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  const service = props.service;
  const handleGetService = props.handleGetService;
  return (
    <div className="card text-center col-md-3 col-sm-6 service-card" style={{ width: "18rem" }}>
      <img style={{ height: '200px' }} src={service.imageURL} className="card-img-top mt-3" alt="" />
      <div className="card-body">

        <animated.h3 style={prop}>{service.productName}</animated.h3>
        <p className="card-text">{service.desc}</p>
        <button onClick={() => handleGetService(service._id)} className="btn btn-primary" >Get Service</button>
      </div>
    </div>
  );
};

export default Service;