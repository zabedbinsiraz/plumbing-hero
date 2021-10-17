import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ReviewForm from "./ReviewForm";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
import "./Review.css";
import { ToastContainer, toast } from "react-toastify";

const Review = () => {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const [rating,setRating] = useState({});
	const onSubmit = (data) => {
		const reviewData = { ...data };
		reviewData.photo = photoUrl;
		reviewData.date = new Date().toLocaleDateString();
		reviewData.ratings = rating.rate;

		axios({
			method: "post",
			url: "https://infinite-hamlet-09689.herokuapp.com/addReview",
			data: reviewData,
		});
		setIsSubmit(true);
		console.log(reviewData);
	};

	const handleUploadImage = (event) => {
		toast("Pleas 😶 wait 5 seconde for upload icon");
		console.log(event.target.files[0]);
		const ImageData = new FormData();
		ImageData.set("key", "b437b2988a9a7d177ebe83d13b4dc437");
		ImageData.append("image", event.target.files[0]);

		axios.post("https://api.imgbb.com/1/upload", ImageData)
			.then(function (response) {
				setPhotoUrl(response.data.data.display_url);
				console.log(response.data.data.display_url);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const ratingChanged = (newRating) => {
        setRating({ rate: newRating });
        console.log(newRating)
    };

	return (
		<>
			<div className="reviewPart">
				<h3 className="text-center">Happy Customers</h3>
				<div className="icon  d-flex justify-content-center mb-3">
					<SpecialIcon />
				</div>
				<div>
					{isSubmit ? (
						<div className="d-flex justify-content-center">
							<SuccessMessage
								successText={
									"Your review  added successfully"
								}
							/>
						</div>
					) : (
						<ReviewForm
							handleUploadImage={
								handleUploadImage
							}
							onSubmit={onSubmit}
							ratingChanged={ratingChanged}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Review;
