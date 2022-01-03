import React from 'react';
import "./LandingPage.css"
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";

const LandingPage = (props)=>{
    let handleSubmitLogIn = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/auth/login");
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/login";
    }
    let handleSubmitSignUp = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/signup");
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/signup";
    }
    return(
        <div className="LandingPageParent">
            <div className="SlideOne">
                <div className="SlideOne-text">
                    <h1 className="welcome">For the love of stories.</h1>
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