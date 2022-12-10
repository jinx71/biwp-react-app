import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
const Navigation = () => {
    const { user, signout } = useContext(AuthContext);
    const menuItems = [
        {
            pathName: 'Home',
            pathRoute: "/home",
        },
        {
            pathName: 'Users',
            pathRoute: '/users',
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
                        {
                            user && user.uid ? <li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/login'} onClick={signout}>Logout</Link></li> : <><li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/login'}>Login</Link></li><li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/signup'}>Signup</Link></li></>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">React Assignment</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems.map(menuItem => <li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={menuItem.pathRoute}>{menuItem.pathName}</Link></li>)
                    }
                    {
                        user && user.uid ? <li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/login'} onClick={signout}>Logout</Link></li> : <><li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/login'}>Login</Link></li><li ><Link className='btn btn-outline btn-primary mx-5 rounded-lg ' to={'/signup'}>Signup</Link></li></>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    {
                        user && user.uid ? <p>{user.email}</p> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Navigation;