import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import "./ManageServices.css";

const ManageServices = () => {
	const [services, setServices] = useState(null);
	useEffect(() => {
		fetch('https://infinite-hamlet-09689.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
	}, []);

	const deleteService = (id) => {
		axios.delete(
			`https://infinite-hamlet-09689.herokuapp.com/deleteService/${id}`
		);
	};

	return (
		<div className="servicesManagement">
			<h3 className="text-center">Manage Services</h3>
			<div className="icon  d-flex justify-content-center ">
				<SpecialIcon />
			</div>
			<div className="servicesManagementTable ml-auto mr-auto text-center">
				{services?.length > 0 && (
					<tr>
						<th>Service Name</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				)}
				{services?.length ? (
					services.map((service) => {
						return (
							<tr>
								<td>
									{
										service.productName
									}
								</td>
								<td>{service.price}</td>
								<td>
									{
										service.desc
									}
								</td>
								<td>
									<Button
										onClick={() =>
											deleteService(
												service._id
											)
										}
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})
				) : (
					<p>Any Services is not Found</p>
				)}
			</div>
		</div>
	);
};

export default ManageServices;
