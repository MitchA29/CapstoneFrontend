import React from 'react';
import "./LandingPage.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = (props)=>{
    return(
        <div className="LandingPageParent">
            <div className="SlideOne">
                <div className="SlideOne-text">
                    <h1 className="welcome">FOR THE LOVE OF STORIES</h1>
                </div>
                <div class="HomeButtons">
                    <button className="LogInButton" type="submit">Log In</button>
                    <button className="SignUpButton" type="submit">Sign Up</button>
                </div>
            </div>
            <div className="SlideOne-image">
            <img src="LandingPageImage.png" alt="IntroPicture"/>
            </div>
        </div>
    );
}
export default LandingPage;