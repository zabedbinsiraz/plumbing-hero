import React from "react";
import "./Sidebar.css";
import logo from "../../../images/water.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faTasks,
  faPlus,
  faUserAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
const AdminSideBar = () => {
  let { path, url } = useRouteMatch();


//   Renamed .ml- = .ms- and .mr- = .me 
//   Renamed .pl- = .ps- and .pr- = .pe- 
//   Renamed .text-left and .text-right to .text-start and .text-end.


  return (
    <div>
      <>
        <Link to={`${url}/allBookingList`}>
          <div className="row mt-4 ms-4 align-items-center">
            <FontAwesomeIcon style={{width:"50px"}} className="me-2" icon={faListAlt} />
            All Booking List
          </div>
        </Link>

        <Link to={`${url}/addService`}>
          <div className="row mt-4 ms-4 align-items-center">
            <FontAwesomeIcon style={{width:"50px"}} className="me-2" icon={faPlus} />
            Add Service
          </div>
        </Link>
        <Link to={`${url}/addAdmin`}>
          <div className="row mt-4 ms-4 align-items-center">
            <FontAwesomeIcon style={{width:"50px"}} className="me-2" icon={faUserShield} />
            Make Admin
          </div>
        </Link>
        <Link to={`${url}/manageServices`}>
          <div className="row mt-4 ms-4 align-items-center">
            <FontAwesomeIcon style={{width:"50px"}} className="me-2" icon={faTasks} />
            Manage Services
          </div>
        </Link>
      </>
    </div>
  );
};

export default AdminSideBar;
