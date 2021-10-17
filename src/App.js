import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardMain from "./Components/DashboardComponents/DashboardMainPart/DashboardMain";
import HomePart from "./Components/HomeComponents/HomePart/HomePart";
import { initializeFramework } from "./Components/LogInComponents/LoginManegment/LoginManegment";
import LoginPage from "./Components/LogInComponents/LoginPage/LoginPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		initializeFramework();
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				setUser(user);
			} else {
				setUser("");
			}
		});
	}, []);
	console.log(user?.displayName);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePart />
					</Route>
					<Route path="/home">
						<HomePart />
					</Route>
					<PrivateRoute path="/dashboard">
						<DashboardMain />
					</PrivateRoute>
					<Route path="/login">
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
