import React, { useContext, useState } from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import ReactStars from "react-rating-stars-component";

const CustomerReview = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [addedReview, setAddedReview] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [rating, setRating] = useState({})

    const onSubmit = data => {

        const reviewData = {
            photo: loggedInUser.photo,
            name: data.name,
            email: loggedInUser.email,
            rank: data.rank,
            ratings: rating.rate,
            desc: data.desc
        }
        console.log(reviewData)

        const url = `https://infinite-hamlet-09689.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log(res)
            })

        setAddedReview(true);


    };

    const ratingChanged = (newRating) => {
        setRating({ rate: newRating });
        console.log(newRating)
    };

    return (

        <div style={{ width: '70%', backgroundColor: 'salmon', padding: '30px', marginTop: '30px' }}>
            <h3 className="text-dark"> Customer Review</h3>
            {
                addedReview ? <h3>Your review added successfully</h3>
                    : <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <div>
                                <label htmlFor="">Your Name</label>
                                <br />
                                <input className="input" type="text" className="form-control" placeholder="Your Full Name" {...register('name')} />
                                <br />
                                <label htmlFor="">Company's Designation</label>
                                <br />
                                <input className="input" type="text" className="form-control" placeholder="Your Job Post" {...register('rank')} />
                                <br />
                                <label htmlFor="">Description</label>
                                <br />
                                <input className="input" type="text" className="form-control" placeholder="Review description" {...register('desc')} />
                            </div>

                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />,

                            <div>
                                <br />


                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <input className="save-btn btn btn-primary" type="submit" />
                        </div>
                    </form>
            }
        </div>

    );
};

export default CustomerReview;