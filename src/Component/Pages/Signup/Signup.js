/*
 This is signup page
*/

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import signUpImage from '../../../Asset/singup.png'
const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile, dummyContext } = useContext(AuthContext);
    // console.log(dummyContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        console.log(email, password)
        // const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
            })
            .catch(error => console.error(error));

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((e) => console.log(e.message))
    }
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Signup now!</h1>
                </div>
                <div className="flex flex-col lg:flex-row-reverse">
                    <form onSubmit={handleSubmit}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-gray-800">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Fullname</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="">
                                        {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                        <span className='label-text-alt dark:text-white'> <Link to="/signup" className='link link-hover hover:text-gray-400'>Already have an account? Please signin</Link></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Signup</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-gray-800">
                        <div className='card-body items-center justify-center'>
                            <img src={signUpImage} alt="" className="src" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;