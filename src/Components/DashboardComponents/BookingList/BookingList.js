import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import BookingListForm from "./BookingListForm";

const BookingList = () => {
	const [user, setUser] = useContext(UserContext);
	const [bookingList, setBookingList] = useState(null);
	console.log("user",user);
	

	useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allBookings?email=' + user.email)
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
                console.log(data)
            })
    }, [user]);

	const bookingListStyle = {
		width: "80%",
		minHeight: "500px",
		backgroundColor: "gray",
		padding: " 50px",
		margin: "0 auto",
	};

	return (
		<div style={bookingListStyle}>
			<h3 className="text-center">Booking List</h3>
			<div className="icon  d-flex justify-content-center mb-5">
				<SpecialIcon />
			</div>
			<div className="d-flex flex-wrap justify-content-center   ">
				{bookingList?.map((booking) => (
					<BookingListForm booking={booking} />
				))}
			</div>
		</div>
	);
};

export default BookingList;
