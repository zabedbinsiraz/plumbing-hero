import React from 'react';
import serviceImg from '../../../../images/drainage.jpg';
import Service from '../Service/Service';
const services =[
  {
    title:'Water Heater Services',
    Image:serviceImg
  },
  {
    title:'Drainage Services',
    Image:serviceImg
  },
  {
    title:'Gas Line Services',
    Image:serviceImg
  },
  {
    title:'Bathroom Services',
    Image:serviceImg
  }
]

const Services = () => {
  return (
    <section>
      <div className="text-center mt-5 mb-5 text-secondary">
        <h2>Our Main Services</h2>
      </div>
      <div className="row d-flex justify-content-center d-grid gap-3"> 
       {
         services.map(service=> <Service service={service}></Service>)
       }
      </div>
    </section>
  );
};

export default Services;