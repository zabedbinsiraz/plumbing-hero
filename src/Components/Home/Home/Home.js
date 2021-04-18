import React from 'react';
import Footer from '../FooterSection/Footer/Footer';
import Header from '../HeaderSection/Header/Header';
import MeetTeam from '../MeetTeam/MeetTeam';
import Projects from '../Projects/Projects/Projects';
import Review from '../Review/Review';
import Services from '../ServiceSection/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Review></Review>
            <MeetTeam></MeetTeam>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;