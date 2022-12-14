import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import i from '../images/login.svg';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from './contexts/AuthProvider';

const Login = () => {
    const [e, setError] = useState('');

    const { login ,providerLogin} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const GoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    login(email, password)
            .then(result => {
                const user = result.user;
                
                const currentuser={email:user.email}

                fetch('https://service-review-server-green.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentuser)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('SR-token', data.token);
                })

                form.reset();
                navigate(from, {replace: true})
                setError('');
            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            })
            .finally(() => {
                
            })
    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-80' src={i} alt="" />
                </div>
                <div className="card flex w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='ml-3 text-red-700 '>{e}</div>
                    </form>
                    <p className='text-center'>New here? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <div >
                        <p className='mt-5 text-center'>Or <br/>Login With Google</p>
                            <button onClick={GoogleSignIn} className='mb-2 mt-3 ml-40' variant="outline-primary"> <FaGoogle></FaGoogle> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;