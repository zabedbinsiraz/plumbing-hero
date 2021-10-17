import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
import "./AddService.css";
import AddServiceForm from "./AddServiceForm";

const AddService = () => {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const onSubmit = (data) => {
		const serviceData = { ...data };
		serviceData.imageURL = photoUrl;
		serviceData.date = new Date().toLocaleDateString();

		console.log(serviceData);
		const url = `https://infinite-hamlet-09689.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log(res)
            })

	};

	const handleUploadImage = (event) => {
		toast("Pleas 😶 wait Two seconde for upload icon");
		const ImageData = new FormData();
		ImageData.set("key", "b437b2988a9a7d177ebe83d13b4dc437");
		ImageData.append("image", event.target.files[0]);

		axios.post('https://api.imgbb.com/1/upload', ImageData)
			.then(function (response) {
				setPhotoUrl(response.data.data.display_url);
			})
			.catch(function (error) {
				console.log(error);
			});
	};


	const addMoreHandle = () => {
		setIsSubmit(false);
	};

	return (
		<div className="addServicePart">
			<h3 className="text-center">Add Service</h3>
			<div className="icon  d-flex justify-content-center ">
				<SpecialIcon />
			</div>
			<div>
				{isSubmit ? (
					<>
						<div className="d-flex justify-content-center">
							<SuccessMessage
								successText={
									"Your    added a service successfully"
								}
							/>
						</div>
						<div className="d-flex justify-content-center mt-5">
							<Button
								variant="info"
								onClick={addMoreHandle}
							>
								Add More
							</Button>
						</div>
					</>
				) : (
					<AddServiceForm
						handleUploadImage={handleUploadImage}
						onSubmit={onSubmit}
					/>
				)}
			</div>
		</div>
	);
};

export default AddService;
