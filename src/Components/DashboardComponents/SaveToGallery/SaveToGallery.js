import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import { ToastContainer, toast } from "react-toastify";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
import SaveToGalleryForm from "./SaveToGalleryForm";
import "./SaveToGallery.css";

const SaveToGallery = () => {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const onSubmit = (data) => {
		const postData = { ...data };
		postData.photo_url = photoUrl;
		postData.date = new Date().toLocaleDateString();

		axios({
			method: "post",
			url: "http://localhost:3003/gallery",
			data: postData,
		});
		setIsSubmit(true);
		console.log(postData);
	};

	const handleUploadImage = (event) => {
		toast("Pleas 😶 wait Two seconde for upload Image");
		const ImageData = new FormData();
		ImageData.set("key", "85dea4d9aec0e6e2a9113a6126e66123");
		ImageData.append("image", event.target.files[0]);

		axios.post("https://api.imgbb.com/1/upload", ImageData)
			.then(function (response) {
				setPhotoUrl(response.data.data.display_url);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	let history = useHistory();

	const addMoreHandle = () => {
		setIsSubmit(false);
		history.push("/Gallery");
	};

	return (
		<div className="saveToGalleryPart">
			<h3 className="text-center">Save To Gallery</h3>
			<div className="icon  d-flex justify-content-center ">
				<SpecialIcon />
			</div>
			<div>
				{isSubmit ? (
					<>
						<div className="d-flex justify-content-center">
							<SuccessMessage
								successText={
									"Your    Post Upload successfully"
								}
							/>
						</div>
						<div className="d-flex justify-content-center mt-5">
							<Button
								variant="info"
								onClick={addMoreHandle}
							>
								Go To Gallery
							</Button>
						</div>
					</>
				) : (
					<SaveToGalleryForm
						handleUploadImage={handleUploadImage}
						onSubmit={onSubmit}
					/>
				)}
			</div>
		</div>
	);
};

export default SaveToGallery;
