import React from 'react';

const Reviews = () => {
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = 'unregistered';
        
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(er=>console.error(er));
    }
    
    return (
        <div>
            <form onSubmit={handleReview}>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 p-10'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone (Not Mandatory)" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email"  className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review Message" required></textarea>

                <input className='btn ml-10 mt-5' type="submit" value="Give a review" />
            </form>
        </div>
    );
};

export default Reviews;