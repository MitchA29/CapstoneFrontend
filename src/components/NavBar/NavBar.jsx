import "./NavBar.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
        <div className="NavParent">
            {user && <h4>Welcome {user.username}</h4>}
            <ul className = "Nav">
                <li>
                    <Link className="HomeNav" to = "/">Home</Link>
                </li>
                <li>
                    <Link className="ProfileNav" to="/profile">Profile</Link>
                </li>
                {!user &&
                    <React.Fragment>
                        <li>
                            <Link className="SignupNav" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="LoginNav" to="/login">Log In</Link>
                        </li>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <li>
                            <Link className="LogoutNav" to="logout">Logout</Link>
                    </li>
                </React.Fragment>
            }
                <li>
                    <Link className="ProductsNav" to="/products">Products</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;