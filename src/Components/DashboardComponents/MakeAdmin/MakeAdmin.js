import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const onSubmit = (data) => {
    const AdminData = { ...data };
    AdminData.date = new Date().toLocaleDateString();

    fetch("https://infinite-hamlet-09689.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AdminData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setIsSubmit(true);
    console.log(AdminData);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="makeAdminSection">
      <h3 className="text-center">Make Admin</h3>
      <div className="icon  d-flex justify-content-center ">
        <SpecialIcon />
      </div>
      {isSubmit ? (
        <div className="d-flex justify-content-center">
          <SuccessMessage successText={"You added a Admin successfully"} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter new Admin Email"
                name="email"
                ref={register({
                  required: true,
                })}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new Admin Name"
                name="name"
                ref={register({
                  required: true,
                })}
              />
            </Form.Group>
          </Row>
          <button class="submitButton">
            Submit
            <div class="SubmitButton__horizontal"></div>
            <div class="submitButton__vertical"></div>
          </button>
        </form>
      )}
    </div>
  );
};

export default MakeAdmin;
