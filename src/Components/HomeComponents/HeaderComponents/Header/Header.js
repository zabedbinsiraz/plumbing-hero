import React from "react";
import "./Header.css";
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import TopBanner from "../TopBanner/TopBanner";
import FeaturePart from "../FeaturePart/FeaturePart";

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
