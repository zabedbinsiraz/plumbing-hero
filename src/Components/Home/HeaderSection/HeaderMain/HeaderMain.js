import React from 'react';
import './HeaderMain.css';
import Typist from 'react-typist';

const HeaderMain = () => {
    return (
        <div className="text-center d-flex align-items-center 
        justify-content-center header-container text-primary">


            {/* <div>
                <h5>Plumbing-Hero Provides</h5>
                <h1>Best Plumbing Services</h1>
            </div> */}

<Typist>
  <h5 className="my-custom-class h-5"> Plumbing-Hero Provides </h5>
  <Typist.Delay ms={500} />
  <br />
  <div className="container">
  <h1 className="h-1">Best Plumbing Services</h1>
 </div>
</Typist>


        </div>
    );
};

export default HeaderMain;