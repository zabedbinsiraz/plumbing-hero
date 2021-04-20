import React from 'react';
import pic1 from '../../../images/md.jpg';
import pic2 from '../../../images/manager.jpg';
import pic3 from '../../../images/engineer.jpg';
import pic4 from '../../../images/md.jpg';

const MeetTeam = () => {
    return (
        <section className="row m-5 p-3 row d-flex justify-content-center d-grid gap-3">
             <div className="text-center mt-5 mb-5">
              <h2> Meet Our Team</h2>

          </div>
          <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={pic1} className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>Daniel Darker</h3>
              <h6>Engineer</h6>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
            <small>email : todo@to.com</small>
            
          </div>
        </div>
          <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={pic2}  className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>Michel Worker</h3>
              <h6>Manager</h6>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
            <small>email : todo@to.com</small>
            
          </div>
        </div>
          <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={pic3}  className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>Cliptoras Das</h3>
              <h6>Engineer</h6>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
            <small>email : todo@to.com</small>
            
          </div>
        </div>
          <div className="card text-center col-md-3 col-sm-6" style={{ width: "18rem" }}>
          <img style={{ height: '200px' }} src={pic4}  className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>WoWer Crush</h3>
              <h6>Assistant Manager</h6>
            <p className="card-text">Some quick example text to build on the card title and make up 
            the bulk of the card's content.</p>
            <small>email : todo@to.com</small>
            
          </div>
        </div>
        </section>
    );
};

export default MeetTeam;