import React from "react";
import SpecialIcon from "../../../SharedComponents/SpecialIcon/SpecialIcon";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import "./Testimonial.css";

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="testimonialHeader">
				<div className="TestimonialHeader justify-content-center mt-5 pt-5">
					<h3>Our Customers Say</h3>
					<div className="icon  d-flex justify-content-center mb-5">
						<SpecialIcon />
					</div>
				</div>
			</div>
			<TestimonialSlider />
		</div>
	);
};

export default Testimonial;
