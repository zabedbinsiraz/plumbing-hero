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
	faClipboard,
	faSignOutAlt,
	faCartPlus,
	faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useState } from "react";
import { useEffect } from "react";
import {
	initializeFramework,
	logOutMethod,
} from "../../LogInComponents/LoginManegment/LoginManegment";
import axios from "axios";
import AdminSideBar from "./AdminSideBar";
import { Nav, Navbar } from "react-bootstrap";

const Sidebar = () => {
	initializeFramework();

	const [user, setUser] = useContext(UserContext);
	let { path, url } = useRouteMatch();

	const [admin, setAdmin] = useState(null);

	useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allAdmin?email=' + user.email)
            .then(res => res.json())
            .then(data => {
                const mail = { email: data[0] }
                setAdmin(mail)
                console.log(data[0], 'data')
            })
    }, [user.email]);



	const logOutHandle = () => {
		logOutMethod();
		setUser(null);
	};

	return (
		<div className="sidebar">
			<Link to="/home">
				<div className="row d-flex justify-content-center">
					<img
						style={{
							width: "130px",
							height: "130px",
						}}
						src={logo}
						alt=""
					/>
				</div>
			</Link>
			 <Link to={`${url}/dashboardBookNow`}>
				<div className="row mt-2 ms-4 align-items-center">
					<FontAwesomeIcon
					    style={{width:"50px"}}
						className="me-2"
						icon={faCartPlus}
					/>
					Book Now
				</div>
			</Link>
			<Link to={`${url}/bookingList`}>
				<div className="row mt-4 ms-4 align-items-center">
					<FontAwesomeIcon
					style={{width:"50px"}}
						className="me-2"
						icon={faListAlt}
					/>
					Booking List
				</div>
			</Link>
			<Link to={`${url}/review`}>
				<div className="row mt-4 ms-4 align-items-center">
					<FontAwesomeIcon
					style={{width:"50px"}}
						className="me-2"
						icon={faClipboard}
					/>
					Review
				</div>
			</Link>
			<Link to={`${url}/saveToGallery`}>
				<div className="row mt-4 ms-4 align-items-center">
					<FontAwesomeIcon
					style={{width:"50px"}}
						className="me-2"
						icon={faPlus}
					/>
					Save to Gallery
				</div>
			</Link>
			<hr style={{ borderBottom: "2px solid white" }} />
			{admin && <AdminSideBar />}

			<Link to="/home">
				<div className="row mt-4 ms-4 align-items-center">
					<FontAwesomeIcon
					style={{width:"50px"}}
						className="me-2"
						icon={faHome}
					/>
					Home
				</div>
			</Link>
			<Link onClick={logOutHandle}>
				<div className="row mt-4 ms-4 align-items-center">
					<FontAwesomeIcon
					style={{width:"50px"}}
						className="me-2"
						icon={faSignOutAlt}
					/>
					Log Out
				</div>
			</Link>
		</div>
	);
};

export default Sidebar;
