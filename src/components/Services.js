import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { AuthContext } from './contexts/AuthProvider';

const Services = () => {
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);
    const [re, setRe] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRe(data))
    }, [user?.email])
    
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
                     service.slice(0,3).map(service => 
                     <Cards key={service._id} service={service}/>
                     )
                }
            </div>
            <h1 className='text-4xl text-center font-bold mt-20 '>Reviews</h1>

            <div className='md:grid grid-cols-3 gap-y-5 mt-5'>
                {
                    re.slice(0,3).map(r => <div className="card card-compact w-72 ml-10 bg-base-100 shadow-xl" key={r._id} r={r} >
                        <div className="card-body">
                            <h2 className="card-title text-xl">{r.message}</h2>
                            <p>{r.customer}</p>

                        </div>
                    </div>
                    )
                }
            </div>

            <div className='ml-96 pl-20'>
                <Link to="/reviews"><button className='btn btn-accent rounded-pill mt-8'>Wanna see? & write your own</button></Link>
            </div>
            
        </div>
    );
};

export default Services;