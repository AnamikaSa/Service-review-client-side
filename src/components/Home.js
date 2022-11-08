import React from 'react';
import about from '../images/about.jpg';
import './Home.css';
import Services from './Services';
const Home = () => {
  return (
    <div>
    <div className='banner'>
      <div className="d-grid gap-5 p-5 text-center text-white">
        <br />
        <h1 className='text-4xl mt-28 font-bold'>
          Exploring the World
        </h1>
        <br /><br />
        <p>Let's enjoy every moment of life while traveling. <br />
          If you are looking for a proper agency ,here you are!!</p>
      </div>
      <div class="btn-toolbar ml-96 pl-20 mt-5">
        <div className="btn-group me-4">
          <button class="btn btn-primary rounded-pill"> Learn More</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-secondary rounded-pill text-white"> Book Now</button>
        </div>
      </div>
    </div>

    {/* About part */}
    <h1 className='text-4xl text-center font-bold mt-8 '>About Us</h1>
    <div className='hero-content mt-5 flex-col lg:flex-row'>
    
      <p>Travel is the movement of people between distant geographical locations. <br/>Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, <br/>ship or other means, with or without luggage, and can be one way or <br/> round trip.<br/>The meaning of TOUR is a journey for business, pleasure, or<br/> education often involving a series of stops and ending at <br/>the starting point.
       <br /><br/>Our services are like that.We try to give our best serviecs.Our expert <br></br> guides take you to the must-see destinations as well as the undiscovered <br/>places to enjoy wonderful tours in Rome in small groups or in <br/> private tours.</p>
      
        <img src={about} alt="" className='rounded shadow-2xl' style={{width:'500px'}}></img>
    </div>

    <Services></Services>

    </div>

  );
};

export default Home;