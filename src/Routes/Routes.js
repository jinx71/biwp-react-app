import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import NotFound from '../Component/Pages/NotFound/NotFound';
import Signup from '../Component/Pages/Signup/Signup';
import Users from '../Component/Pages/Users/Users';

import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },

            {
                path: "/users",
                element: <Users></Users>
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