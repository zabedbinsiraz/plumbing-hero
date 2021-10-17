import React, { useEffect, useState } from "react";
import axios from "axios";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ServicesCard from "../../HomeComponents/ServicesCard/ServicesCard";
import serviceLoaderSpinner from "../../../Spinner/service.gif";

const DashboardServices = () => {
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
		<>
			<div className="servicesHeader justify-content-center ">
				<h3>Our Services</h3>
				<div className="icon  d-flex justify-content-center mb-5">
					<SpecialIcon />
				</div>
			</div>
			<div
				className="w-100 d-flex flex-wrap justify-content-center  "
				style={{ margin: "10px auto" }}
			>
				{services ? (
					services.map((service) => (
						<ServicesCard service={service} />
					))
				) : (
					<img src={serviceLoaderSpinner} alt="" />
				)}
			</div>
		</>
	);
};

export default DashboardServices;
