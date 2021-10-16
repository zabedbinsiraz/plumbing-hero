import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import AllBookingListTable from "./AllBookingListTable";
import "./AllBookingList.css";

const AllBookingList = () => {
	const [allBookingList, setAllBookingList] = useState(null);
	// useEffect(() => {
	// 	axios({
	// 		method: "get",
	// 		url: `https://salty-retreat-17704.herokuapp.com/allBookingList`,
	// 		responseType: "stream",
	// 	}).then(function (response) {
	// 		setAllBookingList(response.data);
	// 	});
	// }, []);

	useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllBookingList(data)
            })
    }, []);

	const changeStatus = (event, id) => {
		const status =
			event.target.options[event.target.selectedIndex].text;
		console.log(status, id);

		fetch(`https://infinite-hamlet-09689.herokuapp.com/singleOrder/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => console.log(data))
	};


	


	return (
		<div className="AllBookingListStyle">
			<h3 className="text-center">All Booking List</h3>
			<div className="icon  d-flex justify-content-center mb-5">
				<SpecialIcon />
			</div>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Service</th>
						<th>Pay with</th>
						<th>Status</th>
					</tr>
				</thead>

				{allBookingList?.map((bookingData) => (
					<AllBookingListTable
						bookingData={bookingData}
						changeStatus={changeStatus}
					/>
				))}
			</Table>
		</div>
	);
};

export default AllBookingList;