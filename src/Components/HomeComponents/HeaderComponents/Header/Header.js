import React from "react";
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import FeaturePart from "../FeaturePart/FeaturePart";
import TopBanner from "../TopBanner/TopBanner";

const Header = () => {
	return (
		<div>
			<NavBar />
			<TopBanner />
			<FeaturePart />
		</div>
	);
};

export default Header;
