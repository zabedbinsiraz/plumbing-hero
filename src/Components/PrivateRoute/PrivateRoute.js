import React, { useEffect } from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
	const [user, setUser] = useContext(UserContext);

	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					user?.email ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: {
									from: location,
								},
							}}
						/>
					)
				}
			/>
		</div>
	);
};

export default PrivateRoute;
