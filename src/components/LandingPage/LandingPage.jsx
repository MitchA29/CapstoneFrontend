import React from 'react';
import "./LandingPage.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = (props)=>{
    return(
        <div className="LandingPageParent">
            <div className="container-fluid">
                <h1 className="welcome">Dewey</h1>
                <p className="intro">Read. Share. Explore.</p>
            </div>
            <div class="HomeButtons">
                <button className="LogInButton" type="submit">Log In</button>
                <button className="SignUpButton" type="submit">Sign Up</button>
            </div>
        </div>
    );
}
export default LandingPage;