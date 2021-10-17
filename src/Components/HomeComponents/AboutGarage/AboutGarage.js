import React from "react";
import aboutPic1 from "../../../images/aboutUs1.jpeg";
import aboutPic2 from "../../../images/aboutUs2.jpeg";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import "./AboutGarage.css";

const AboutGarage = () => {
	return (
		<div className="container">
			<div className=" row w-100">
				<div className="col-lg-6 aboutGarage">
					<h3>About Our Company</h3>
					<div className="aboutPartIcon">
						<SpecialIcon />
					</div>
					<div className="aboutText">
						<div className="aboutHeader">
							<h5>
								We always try our best
								to give you our best
								service. We try to solve
								our customers' problems
								with all kinds of
								services.
							</h5>
						</div>
						<div className="aboutDescription">
							<p>
								We are the only country
								in the country that
								provides online services
								with full assurance and
								efficiency. We always
								have skilled craftsmen
								ready for our work. We
								try to work as fast as
								possible wherever we are
								in our office hours. Our
								head office is at
								Sylhet City. In
								addition, we have two
								branches in each
								district. Where you can
								get the service anytime
								between 10 am to 10 pm.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-5 garagePictures">
					<img
						className="image1"
						src={aboutPic2}
						alt=""
					/>
					<img
						className="image2"
						src={aboutPic1}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutGarage;
