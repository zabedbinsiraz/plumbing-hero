import React, { useContext } from "react";
import {
	Route, Switch, useRouteMatch
} from "react-router-dom";
import { UserContext } from "../../../App";
import MobileSideBar from "../../SharedComponents/MobileSideBar/MobileSideBar";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import AddService from "../AddService/AddService";
import AllOrders from "../AllBookingList/AllBookingList";
import BookingList from "../BookingList/BookingList";
import BookNowPart from "../BookNowComponents/BookNowPart/BookNowPart";
import DashboardServices from "../DashboardServices/DashboardServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import Review from "../Review/Review";
import "./DashboardMain.css";


const DashboardMain = () => {
	const [user, setUser] = useContext(UserContext);
	let { path, url } = useRouteMatch();

	return (
		<div className="row w-100 DashBoardMainStyle">
			<div className="mobileNav col-12">
				<MobileSideBar />
			</div>
			<div className="col-md-2 ps-2 pe-2 desktopNav">
				<Sidebar />
			</div>
			<div className="col-md-9 mt-5 dashboardMainPart">
				<Switch>
					<Route exact path={path}>
						<DashboardServices />
					</Route>
					<Route path={`${path}/dashboardBookNow`}>
						<DashboardServices />
					</Route>
					<Route path={`${path}/bookNow/:id`}>
						<BookNowPart />
					</Route>
					<Route path={`${path}/bookingList`}>
						<BookingList />
					</Route>
					<Route path={`${path}/allBookingList`}>
						<AllOrders />
					</Route>
					<Route path={`${path}/review`}>
						<Review />
					</Route>
					<Route path={`${path}/addService`}>
						<AddService />
					</Route>
					<Route path={`${path}/addAdmin`}>
						<MakeAdmin />
					</Route>
					<Route path={`${path}/manageServices`}>
						<ManageServices />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default DashboardMain;
