import {
  faListAlt, faPlus, faTasks, faUserShield
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Sidebar.css";

const AdminSideBar = () => {
  let { path, url } = useRouteMatch();

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
