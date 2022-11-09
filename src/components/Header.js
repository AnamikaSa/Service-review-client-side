import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AuthContext } from './contexts/AuthProvider';

const Header = () => {
    const{ user, logOut}=useContext(AuthContext);
    const Log_out = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const end = <>
        {
            user?.email ?
                <>
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li>
                        <button onClick={Log_out} className='btn btn-info'>Log Out</button>
                    </li></ul>
                </>
                :
                <li className='btn btn-outline btn-warning'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Item 1</Link></li>
                            
                            <li><Link to='/'>Item 3</Link></li>
                        </ul>
                    </div>
                    <img className="w-10" src={logo} alt=''/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/formoreinfo'>Services</Link></li>
                        {/* <li><Link to='/reviews'>Reviews</Link></li> */}
                        <li><Link to='/'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to='/login'>
                <button className="btn btn-outline btn-warning">Login</button></Link> */}
                {end}
            </div>

            </div>
        </div>
    );
};

export default Header;