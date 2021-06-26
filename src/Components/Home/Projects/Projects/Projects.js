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
            <div className="row text-center pt-3 bg-secondary text-white">
                <h3>Plumbing Services</h3>
                <div className="d-flex m-5 flex-wrap">
                    <div className='m-3 p-3' ><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={projectPic} alt="" />  <h6 >Gas Line Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project1} alt="" /><h6 >Washroom Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project2} alt="" /><h6 >Drainage Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project3} alt="" /><h6 >Gas Line Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project4} alt="" /><h6 >Bathroom Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project5} alt="" /><h6 >Gas Line Servicing</h6></div>
                    <div className='m-3 p-3'><img className="m-2 p-2" style={{ height: '200px', width: '200px' }} src={project6} alt="" /><h6 >Water Heater Servicing</h6></div>

                </div>
            </div>

        </section>
    );
};

export default Projects;