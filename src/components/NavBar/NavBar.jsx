import "./NavBar.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" >
                Dewey
            </Link>
            <ul className='nav-links'>
                <li className="nav-item">
                    <Link to="/" className="nav-link" >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/explore" className="nav-link" >
                        Explore
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/bookclubs" className="nav-link" >
                        Book Clubs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link" >
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;