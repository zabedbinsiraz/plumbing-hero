import React, { useEffect, useState } from 'react';

import SingleReview from './SingleReview';

const Review = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://infinite-hamlet-09689.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <section className="row m-5 p-3 ">

            <div className="text-center mt-5 mb-5">

                <h2>Our Customer Words</h2>

            </div>

            <div className="d-flex flex-wrap bg-light">


                {
                    reviews.map(review => <SingleReview review={review}></SingleReview>)
                }



            </div>

        </section>
    );
};

export default Review;