import "./NavBar.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavBar = ({ user }) => {
    return (
        <Nav className="navbar">
            {!user && (
                <>
                </>
            )}
            {user && (
                <>
                    <NavLink to="/" className="nav-logo" >
                        Dewey
                    </NavLink>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/explore" className="nav-link" >
                                Explore
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/bookclubs" className="nav-link" >
                                Book Clubs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" >
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Logout</NavLink>
                        </li>
                    </ul>
                </>
            )}
        </Nav>
    );
}
export default NavBar;