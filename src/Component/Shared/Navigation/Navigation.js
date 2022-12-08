import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
const Navigation = () => {
    const menuItems = [
        {
            pathName: 'Home',
            pathRoute: "/",
        },
        {
            pathName: 'Blog',
            pathRoute: '/blog',
        },
        {
            pathName: 'Login',
            pathRoute: '/login',
        },
        {
            pathName: 'Signup',
            pathRoute: '/signup',
        },

    ]
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems.map(menuItem => <li ><Link className='btn btn-outline btn-primary my-3 rounded-lg  ' to={menuItem.pathRoute}>{menuItem.pathName}</Link></li>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-primary">React Assignment</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems.map(menuItem => <li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={menuItem.pathRoute}>{menuItem.pathName}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    <ToggleTheme></ToggleTheme>
                </div>
            </div>
        </div>
    );
};

export default Navigation;