import React from "react";
import { Col, Form, Row, FormControl, InputGroup, InputGroupText } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";

const ReviewForm = ({ handleUploadImage, onSubmit, ratingChanged }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              ref={register({
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              name="email"
              ref={register({
                required: true,
              })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Your Image</Form.Label>

            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <Form.Control
              type="file"
              custom
              style={{ zIndex: "0" }}
              isValid
              onChange={(event) => handleUploadImage(event)}
            />

            <ToastContainer />
          </Form.Group>
        </Row>
        <Row className=" mt-2">
          <Form.Group as={Col}>
            <InputGroup>
             
                <InputGroup.Text>Comment</InputGroup.Text>
              
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="desc"
                ref={register({
                  required: true,
                })}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className=" mt-2 mb-5">
          <Form.Group as={Col}>
            <InputGroup>
             
                <InputGroup.Text>Your Ratings</InputGroup.Text>
              
                <div className="p-2 m-2">
                <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                </div>
            </InputGroup>
          </Form.Group>
        </Row>

        <button class="submitButton">
          Submit
          <div class="SubmitButton__horizontal"></div>
          <div class="submitButton__vertical"></div>
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
