import React from 'react';

// import { Link } from 'react-router-dom';

const Cards = ({ service }) => {
    const { img, title } = service;
    return (
        <div className="card card-compact w-72 ml-10 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                    
                <button className="btn btn-primary">More Info</button>
                    
            
            </div>
        </div>
    );
};

export default Cards;