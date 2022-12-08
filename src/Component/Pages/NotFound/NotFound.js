/*
 This is Notfound page
*/


import React from 'react';
import { Link } from 'react-router-dom';

// import { Link, useLocation } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png" className='mt-20' style={{ width: '50%', margin: '20px auto' }} alt="" />
            <Link to='/' className='text-center flex justify-center link'>Go to Home</Link>
        </div>
    );
};

export default NotFound;