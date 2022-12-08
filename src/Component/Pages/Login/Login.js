/*
 This is login page
*/

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import loginImage from '../../../Asset/Authentication.gif'
const Login = () => {
    const { dummyContext, user, signin, handleGoogleSignIn } = useContext(AuthContext);
    console.log(dummyContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                const currentUser = {
                    email: user.email
                }
            })
            .catch(error => {
                setError(error.message)
            });
    }


    return (
        <div className="hero my-10">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>

                <div className="flex flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-gray-800">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="">
                                        {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                        <span className='label-text-alt dark:text-white'> <Link to="/signup" className='link link-hover hover:text-gray-400'>New User? Please signup</Link></span>
                                    </label>
                                </div>
                                <div className="label">
                                    <p className='text-red-500 label-text-alt'>{error}</p>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-primary">Login</button>

                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login With Google</button>
                            {/* <button className="btn btn-primary" onClick={handleGithubSignIn}>Login With Github</button> */}
                        </div>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-gray-800">
                        <div className='card-body'>
                            <img src={loginImage} alt="" className="src" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Login;