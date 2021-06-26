import React, { useState } from 'react';
import Book from '../../Dashboard/CustomerDashboard/Book/Book';
import Footer from '../FooterSection/Footer/Footer';
import Header from '../HeaderSection/Header/Header';
import MeetTeam from '../MeetTeam/MeetTeam';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Projects from '../Projects/Projects/Projects';
import Review from '../Review/Review';
import Services from '../ServiceSection/Services/Services';



const Home = () => {

    const [getService, setGetService] = useState(false);
    const [singleItem, setSingleItem] = useState({});

    const handleGetService = id => {
        console.log('buy now', id)

        setGetService(true);

        fetch(`https://infinite-hamlet-09689.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(item => {
                setSingleItem(item)
                console.log(item)


            })

    }
    return (

        <section style={{ backgroundColor: 'lightblue' }}>

            {
                getService ? <PrivateRoute>
                    <Book singleItem={singleItem}></Book>
                </PrivateRoute>
                    : <div>
                        <Header></Header>
                        <Services handleGetService={handleGetService}></Services>
                        <Projects></Projects>
                        <Review></Review>
                        <MeetTeam></MeetTeam>
                        <Footer></Footer>

                    </div>
            }
        </section>

    );
};

export default Home;