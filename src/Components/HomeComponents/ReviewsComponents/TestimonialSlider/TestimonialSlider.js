import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
	const [testimonials, setTestimonials] = useState(null);

	useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonials(data)
            })
    }, [])
	return (
		<div>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={6100}
			>
				{testimonials?.map((testimonial) => (
					<TestimonialCard testimonial={testimonial} />
				))}
			</Carousel>
		</div>
	);
};

export default TestimonialSlider;
