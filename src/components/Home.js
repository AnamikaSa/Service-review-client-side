import React from 'react';
import { Link } from 'react-router-dom';
import about from '../images/about.jpg';
import im1 from '../images/gallery-2.jpg';
import im2 from '../images/gallery-4.jpg';
import im3 from '../images/gallery-5.jpg';
import im4 from '../images/img8.jpg';
import im5 from '../images/packege-2.jpg';
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
      <div className="btn-toolbar ml-96 pl-32 mt-5">
        <div className="btn-group me-4">
         <Link to='/about'> <button className="btn btn-primary rounded-pill"> Learn More</button></Link>
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

    {/* Gallery */}

<div>
<h1 className='text-4xl text-center font-bold mt-8 '>Gallery</h1>
    <h1 className="text-center">PHOTO'S FROM TRAVELLERS</h1>
    <p className=" pt-3 text-center">
      Enjoy your journey ,live with happiness & make memories. <br/> Explore the World.
    </p>
<div className='md:grid grid-cols-3 mt-10 ml-16 md:ml-3  lg:gap-y-5 gap-16'>
  <img className='w-80 p-1 'src={im1} alt=""></img>
  <img className='w-80 p-1' src={im2} alt=""></img>
  <img className='w-80 p-1' src={im4} alt=""></img>
  <img className='w-80 p-1' src={im3} alt=""></img>
  <img className='w-80 p-1' src={im5} alt=""></img>
</div>

</div>
    </div>

  );
};

export default Home;