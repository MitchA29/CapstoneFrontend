import React from 'react';
import "./LandingPage.css"
import axios from 'axios';

const LandingPage = (props)=>{
    return(
        <div className="LandingPageParent">
            <div className="SlideOne">
                <div className="SlideOne-text">
                    <h1 className="welcome">For the love of stories.</h1>
                    <h4 className="slogan">Read. Share. Explore.</h4>
                </div>
                <div class="HomeButtons">
                    <a className="LogInButton" href="/login">Log In</a>
                    <a className="SignUpButton" href="/signup">Sign Up</a>
                </div>
            </div>
            <div className="SlideOne-image">
            <img src="LandingPageImage.png" alt="IntroPicture"/>
            </div>
        </div>
    );
}
export default LandingPage;