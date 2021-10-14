import React from "react";
import "./SpecialIcon.css";
import specialImage from "../../../images/water.jpg";

const SpecialIcon = () => {
	return (
		<div className="specialIcon">
			<img src={specialImage} alt="" />
		</div>
	);
};

export default SpecialIcon;
