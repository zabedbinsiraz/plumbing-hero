import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../images/pHLogo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../../App";
import UserAction from "./UserAction/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../../images/profile.png";

const NavBar = () => {
	const [user, setUser] = useContext(UserContext);
	const [toggle, setToggle] = useState("none");
	const profileOpen = () => {
		toggle === "none" ? setToggle(" ") : setToggle("none");
	};
	const profileClose = () => {
		setToggle(" ");
	};

	return (
		<Navbar expand="lg" className="NavBarPart">
			<Container fluid>

			<Navbar.Brand href="/home" className="text-dark fs-2">
        <img
          alt=""
          src={logo}
          width="45"
          height="45"
          className="d-inline-block "
        />{' '}
      Plumbing-Hero
      </Navbar.Brand>

			{/* <Navbar.Brand href="/home" className="logo">
				<img src={logo} alt="" />
			</Navbar.Brand> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<div className="navMenu">
						<Link to="/home">Home</Link>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/dashboard/dashboardBookNow">
							Services
						</Link>
						{user?.email ? (
							<Button
								onClick={profileOpen}
								className="profileBtn"
							>
								<img
									src={
										user?.photoURL ||
										profileImage
									}
									alt=""
								/>
								Profile
								<FontAwesomeIcon
									className="ms-2"
									icon={faSortDown}
								/>
							</Button>
						) : (
							<Link to="/login">LogIn</Link>
						)}
					</div>
				</Nav>
			</Navbar.Collapse>
			<div
				className="nestedNav"
				style={{ display: toggle }}
				onClick={profileClose}
			>
				<UserAction />
			</div>
			</Container>
		</Navbar>
	);
};

export default NavBar;
