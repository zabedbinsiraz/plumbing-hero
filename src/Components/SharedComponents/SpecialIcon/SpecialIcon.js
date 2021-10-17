import React from "react";
import specialImage from "../../../images/special.png";
import "./SpecialIcon.css";

const SpecialIcon = () => {
	return (
		<div className="specialIcon">
			<img src={specialImage} alt="" />
		</div>
	);
};

export default SpecialIcon;
