import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Services = () => {
    const [service, setService] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setService(data))
    }, []);


    return (
        <div>
            <div>
            <h1 className='text-4xl text-center font-bold mt-8 '>Our Services</h1>
            <p className='text-center mt-5'>This Are the palaces we can provide you. Choose your destination.</p>
            </div>

            <div className='md:grid grid-cols-3 mt-10'>
                {
                     service.map(service => <Cards
                        key={service._id}
                        service={service}
                    ></Cards>)
                }
            </div>
            
        </div>
    );
};

export default Services;