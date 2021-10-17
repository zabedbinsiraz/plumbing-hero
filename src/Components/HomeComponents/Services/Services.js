import React, { useEffect, useState } from "react";
import serviceLoader from "../../../Spinner/service.gif";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {
	const [services, setServices] = useState(null);

	useEffect(() => {
		fetch('https://infinite-hamlet-09689.herokuapp.com/services')
		  .then(res => res.json())
		  .then(data => {
			console.log(data)
			setServices(data)
		  })
	  }, [])


	return (
		<div className="servicesPart " style={{ marginTop: "180px" }}>
			<div className="servicesHeader justify-content-center mt-5 pt-5">
				<h3>Our Services</h3>
				<div className="icon  d-flex justify-content-center mb-5">
					<SpecialIcon />
				</div>
				<p style={{ fontSize: "25px" }}>
					We always strive to provide you with the best
					and most up-to-date service
				</p>
			</div>
			<div className=" w-100 d-flex flex-wrap justify-content-center mt-5">
				{services ? (
					services.map((service) => (
						<ServicesCard service={service} />
					))
				) : (
					<img src={serviceLoader} alt="" />
				)}
			</div>
		</div>
	);
};

export default Services;
