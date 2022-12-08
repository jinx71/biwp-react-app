/*
 This is darkmode toggler component
*/


import React from 'react';

const Background = ({ children }) => {
    return (
        <body className="bg-white dark:bg-gray-800 text-black dark:text-white transition-all">

            <div className='max-w-7xl mx-auto'>
                {children}
            </div>


        </body>
    );
};

export default Background;