import React from 'react';
import projectPic from '../../../../images/plumbingTop3.jpg';


const Projects = () => {
    return (
      <section className='row bg-light mt-5'>
          <div className="text-center mt-5 mb-5">
              <h2>Our Successful Projects</h2>
          </div>
          <div className="row text-center bg-secondary">
              <h3>Plumbing Services</h3>
              <div className="d-flex m-5 ">
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    
              </div>
          </div>
          <div className="row text-center bg-secondary">
              <h3>Drainage Services</h3>
              <div className="d-flex m-5 ">
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    
              </div>
          </div>
          <div className="row text-center bg-secondary">
              <h3>Water Heater Services</h3>
              <div className="d-flex m-5 ">
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    
              </div>
          </div>
          <div className="row text-center bg-secondary">
              <h3>Gas Line Services</h3>
              <div className="d-flex m-5 ">
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5" style={{height:'200px'}} src={projectPic} alt=""/>
                    
              </div>
          </div>
      </section>
    );
};

export default Projects;