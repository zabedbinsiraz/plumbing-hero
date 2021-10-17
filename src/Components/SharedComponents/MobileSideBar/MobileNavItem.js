import {
	faCartPlus, faClipboard, faHome, faListAlt, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../../App";
import {
	initializeFramework,
	logOutMethod
} from "../../LogInComponents/LoginManegment/LoginManegment";
import AdminSideBar from "../Sidebar/AdminSideBar";

const MobileNavItem = ({ closeModal }) => {
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

	const closeNav = () => {
		closeModal();
	};

	const logOutHandle = () => {
		logOutMethod();
		setUser(null);
		sessionStorage.removeItem("token");
	};

	return (
		<div className="sidebar" onClick={closeNav}>
			<Link to={`${url}/dashboardBookNow`}>
				<div className="row    ms-4 align-items-center ">
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

			<br />
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

export default MobileNavItem;
