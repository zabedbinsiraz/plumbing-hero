import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import searchBtn from "../../../images/water.jpg";
import { GoogleSignInMethod } from "../LoginManegment/LoginManegment";
import "./SocialLogin.css";



const SocialLogin = () => {
	const [user, setUser] = useContext(UserContext);

	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const googleSignInHandle = () => {
		GoogleSignInMethod().then((res) => {
			setUser(res);
			history.replace(from);
		});
	};
	return (
		<div className="google d-flex justify-content-center">
			<button
				className="btn draw-border"
				onClick={googleSignInHandle}
			>
				<div className="row socialRow d-flex align-items-center justify-content-around">
					<img src={searchBtn} alt="" />
					Log in with Google
				</div>
			</button>
		</div>
	);
};

export default SocialLogin;
