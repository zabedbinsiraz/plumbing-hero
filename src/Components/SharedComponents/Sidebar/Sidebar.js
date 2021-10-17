import {
	faCartPlus, faClipboard, faHome, faListAlt, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/pHLogo.png";
import {
	initializeFramework,
	logOutMethod
} from "../../LogInComponents/LoginManegment/LoginManegment";
import AdminSideBar from "./AdminSideBar";
import "./Sidebar.css";

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
