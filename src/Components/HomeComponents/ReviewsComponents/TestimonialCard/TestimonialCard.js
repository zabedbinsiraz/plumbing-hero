import React from "react";
import ReactStars from "react-rating-stars-component";
import profileImage from "../../../../images/profile.png";

const TestimonialCard = ({ testimonial }) => {
  console.log(testimonial);
  return (
    <div className="text-center">
      <img
        style={{ width: "100px", height: "130px" }}
        src={testimonial.photo || profileImage}
        alt=""
      />
      <div className="TestimonialCarousel">
        <h3>{testimonial.name}</h3>
        <h4>{testimonial.date}</h4>
        <p>{testimonial.desc}</p>
        <p>
          <ReactStars count={testimonial.ratings} size={24} color="#ffd700" />
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
