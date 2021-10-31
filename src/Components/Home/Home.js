import React from 'react';
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Offers from '../Offers/Offers';
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <div id="home">
            
           <Banner></Banner>
           <Services></Services>
           <Offers></Offers>
           <Gallery></Gallery>
           
        </div>
    );
};

export default Home;