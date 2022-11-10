import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';

const Reviews = () => {
    const { user,logOut } = useContext(AuthContext);
    const [re, setRe] = useState([])

    useEffect(() => {
        fetch(`https://service-review-server-green.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('SR-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
            .then(data => {setRe(data)})
    }, [user?.email, logOut])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';

        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://service-review-server-green.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Reviewed successfully')
                    window.location.reload();
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            <div className='md:grid grid-cols-3 gap-y-5 mt-5'>
                {
                    re.map(r => <div className="card card-compact w-72 ml-10 bg-base-100 shadow-xl" key={r._id} r={r} >
                        <div className="card-body">
                            <h2 className="card-title text-xl">{r.message}</h2>
                            <p>{r.customer}</p>

                        </div>
                    </div>
                    )
                }
            </div>
{/* <div>
<Link to="/myreviews"><button className='btn btn-accent rounded-pill ml-96 mt-8'>my reviews</button></Link>
</div> */}


            <form onSubmit={handleReview}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 p-10'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone (Not Mandatory)" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" defaultValue={user?.email} readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review Message" required></textarea>

                <input className='btn ml-10 mt-5' type="submit" value="Give a review" />
            </form>
        </div>
    );
};

export default Reviews;