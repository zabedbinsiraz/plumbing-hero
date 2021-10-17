import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import SpecialIcon from "../../../SharedComponents/SpecialIcon/SpecialIcon";
import { UserContext } from "../../../../App";

const BookNowForm = ({ onSubmit, service }) => {
	const [user, SetUser] = useContext(UserContext);
	const { register, handleSubmit } = useForm();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Form.Group as={Col}>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							value={user?.productName}
							name="name"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={user?.email}
							name="email"
							ref={register({
								required: true,
							})}
							readOnly
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group as={Col}>
						<Form.Label>City</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Your City"
							name="city"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type="text"
							value="Bangladesh"
							name="country"
							ref={register({
								required: true,
							})}
							readOnly
						/>
					</Form.Group>
				</Row>

				<Row>
					<Form.Group as={Col}>
						<Form.Label>Service Name</Form.Label>
						<Form.Control
							type="text"
							// placeholder="service Name"
							name="productName"
							value={service?.productName}
							ref={register({
								required: true,
							})}
							readOnly
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Service Price</Form.Label>
						<Form.Control
							type="text"
							// placeholder="Price"
							name="price"
							value={service?.price}
							ref={register({
								required: true,
							})}
							readOnly
						/>
					</Form.Group>
				</Row>
				<button type="submit" class="submitButton mt-5">
					Next
					<div class="SubmitButton__horizontal"></div>
					<div class="submitButton__vertical"></div>
				</button>
			</form>
		</div>
	);
};

export default BookNowForm;
