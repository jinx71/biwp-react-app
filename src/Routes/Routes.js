import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Pages/Blog/Blog';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import NotFound from '../Component/Pages/NotFound/NotFound';
import Signup from '../Component/Pages/Signup/Signup';

import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: ({ params }) => fetch(''),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) => fetch('https://travel-guide-server-jinx71.vercel.app/')
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: ({ params }) => fetch('https://travel-guide-server-jinx71.vercel.app/')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },


        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
])