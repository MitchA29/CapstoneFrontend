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
                    <Nav.Link to="/" className="nav-logo" >
                        Dewey
                    </Nav.Link>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Nav.Link to="/" className="nav-link" >
                                Home
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link to="/explore" className="nav-link" >
                                Explore
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link to="/bookclubs" className="nav-link" >
                                Book Clubs
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link to="/profile" className="nav-link" >
                                Profile
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link href="/">Logout</Nav.Link>
                        </li>
                    </ul>
                </>
            )}
        </Nav>
    );
}
export default NavBar;