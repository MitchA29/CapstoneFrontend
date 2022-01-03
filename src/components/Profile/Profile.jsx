import React from 'react';
import "./Profile.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = (props)=>{
    return(
        <div className="ProfileParent">
            <div className="ProfileTitle">
                <h1 className="welcome">Welcome!</h1>
            </div>
        </div>
    );
}
export default Profile;