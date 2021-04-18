import React from 'react';
import avatar from '../../../images/school.png';

const Review = () => {
    return (
       <section className="row m-5 p-3">
           <div className="text-center mt-5 mb-5">
              <h2>Our CustomerWords</h2>

          </div>
          <div className="d-flex flex-wrap">
              <div className="col-md-5 d-flex m-5 p-3 border">
                  <div className="me-5">
                        <img style={{height:'30px'}} src={avatar} alt=""/>
                  </div>
                  <div className="me-5">
                      <div className="border">
                          <small>Rating...</small>
                      </div>
                        <h4>Karim Uddin</h4>
                        <h6>Assistant High School Teacher</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Reiciendis, itaque!</p>
                  </div>
              </div>
              <div className="col-md-5 d-flex m-5 p-3 border">
                  <div className="me-5">
                        <img style={{height:'30px'}} src={avatar} alt=""/>
                  </div>
                  <div className="me-5">
                      <div className="border">
                          <small>Rating...</small>
                      </div>
                        <h4>Karim Uddin</h4>
                        <h6>Assistant High School Teacher</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Reiciendis, itaque!</p>
                  </div>
              </div>
              <div className="col-md-5 d-flex m-5 p-3 border">
                  <div className="me-5">
                        <img style={{height:'30px'}} src={avatar} alt=""/>
                  </div>
                  <div className="me-5">
                      <div className="border">
                          <small>Rating...</small>
                      </div>
                        <h4>Karim Uddin</h4>
                        <h6>Assistant High School Teacher</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Reiciendis, itaque!</p>
                  </div>
              </div>
              <div className="col-md-5 d-flex m-5 p-3 border">
                  <div className="me-5">
                        <img style={{height:'30px'}} src={avatar} alt=""/>
                  </div>
                  <div className="me-5">
                      <div className="border">
                          <small>Rating...</small>
                      </div>
                        <h4>Karim Uddin</h4>
                        <h6>Assistant High School Teacher</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Reiciendis, itaque!</p>
                  </div>
              </div>
          </div>

       </section>
    );
};

export default Review;