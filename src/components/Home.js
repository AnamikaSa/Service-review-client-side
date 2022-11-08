import React from 'react';
import banner from '../images/banner.jpg';
import './Home.css';
const Home = () => {
    return (
        <div className='banner'>
            <div className="d-grid gap-5 p-5 text-center text-white">
        <br/>
        <h1 className='text-4xl mt-28 font-bold'>
          Exploring the World
        </h1>
        <br/><br/>
        <p>Let's enjoy every moment of life while traveling. <br/>
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
    );
};

export default Home;