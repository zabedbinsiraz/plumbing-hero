import React from "react";
import { Button, Card } from "react-bootstrap";

const BookingListForm = ({ booking }) => {
	return (
		<div>
			<Card
				border="success"
				style={{ width: "18rem" }}
				className="ms-2 me-2 mt-3"
			>
				<Card.Header className="d-flex justify-content-between">
					<img
						style={{ width: "50px" }}
						src={booking.imageURL}
						alt=""
					/>
					<Button variant="primary">
						{booking.status}
					</Button>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						{booking.productName}
					</Card.Title>
					<Card.Text>
						{booking.desc}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default BookingListForm;
