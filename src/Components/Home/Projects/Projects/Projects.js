import React from 'react';
import projectPic from '../../../../images/water.jpg';
import project1 from '../../../../images/bathroom.jpg';
import project2 from '../../../../images/drain.jpg';
import project3 from '../../../../images/drainage.jpg';
import project4 from '../../../../images/water.jpg';
import project5 from '../../../../images/bathroom.jpg';
import project6 from '../../../../images/drainage.jpg';


const Projects = () => {
    return (
      <section className='row bg-light mt-5'>
          <div className="text-center mt-5 mb-5">
              <h2>Our Successful Projects</h2>
          </div>
          <div className="row text-center pt-3 bg-secondary">
              <h3>Plumbing Services</h3>
              <div className="d-flex m-5 flex-wrap">
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={projectPic} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project1} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project2} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project3} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project4} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project5} alt=""/>
                    <img className="me-5 p-3" style={{height:'200px',width:'200px'}} src={project6} alt=""/>
                    
              </div>
          </div>
         
      </section>
    );
};

export default Projects;