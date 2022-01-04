import React from 'react';
import "./Profile.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = (props)=>{
    return(
        <div className="profileParent">
            <div className="profileheader">
            <a className="uploadButton" href="/upload">Upload</a>
            <a className="createClubButton" href="/createclub">Create Club</a>

            </div>
        </div>
    );
}
export default Profile;