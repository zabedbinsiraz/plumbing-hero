import React from "react";
import Rotate from "react-reveal/Rotate";
import { useHistory } from "react-router";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
	console.log(service);
	const history = useHistory();
	const bookNowHandle = (id) => {
		history.push(`/dashboard/bookNow/${id}`);
	};
	return (
		<Rotate top left>
			<div className="serviceCol">
				<div className="serviceNestedDiv">
					<div className="serviceVector">
						<img src={service.imageURL} alt="" />
					</div>
					<div className="featureInfo">
						<h2>{service.productName}</h2>
						<p>{service.desc}</p>
						<h6>{service.price} TK.</h6>
					</div>
					<div className="bookNowBtn mt-2">
						<button
							class="btn rounded"
							onClick={() =>
								bookNowHandle(
									service._id
								)
							}
						>
							<span class="text-green">
								Book Now
							</span>
						</button>
					</div>
				</div>
			</div>
		</Rotate>
	);
};

export default ServicesCard;
