import React, {  useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Cards from './Cards';
// import { AuthContext } from './contexts/AuthProvider';

const Services = () => {
    // const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);
    

    
    
    useEffect( () =>{
        fetch('https://service-review-server-green.vercel.app/services')
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
                     service.slice(0,3).map(service => 
                     <Cards key={service._id} service={service}/>
                     )
                }
            </div>
            

            
        </div>
    );
};

export default Services;