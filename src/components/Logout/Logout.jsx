import React from "react";
import axios from "axios";

const LogoutUser = () => {
    localStorage.removeItem('token');
    window.location = '/'
}
export default LogoutUser;