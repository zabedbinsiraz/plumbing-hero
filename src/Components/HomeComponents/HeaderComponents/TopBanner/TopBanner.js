import React from "react";
import { useHistory } from "react-router";
import "./TopBanner.css";

const TopBanner = () => {
	let history = useHistory();
	const bookNowHandle = () => {
		history.push("/dashboard/dashboardBookNow");
	};
	return (
		<>
			<div className="topBanner text-center align-items-center">
				<h1 className="">
					All Types Plumbing Repair & Custom Services
				</h1>
				<div className="bookNowBtn mt-4">
					<button
						class="btn rounded"
						onClick={bookNowHandle}
					>
						<span class="text-green">
							Book Now
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default TopBanner;
