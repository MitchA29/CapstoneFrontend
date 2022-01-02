import React, {useState} from "react";
import "./LogIn.css";
import axios from "axios";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = async (event) => {
        event.preventDefault();
        let logInCred = {username: username, password: password};
        let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", logInCred);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/profile/";
    }

    return (
        <div className="logInParent">
            <form class="row g-3" onSubmit={(event) => handleSubmit(event)}>
            <div class="col-md-5">
                <label for="inputUserName" class="form-label">Username</label>
                <input type="username" class="form-control" id="inputUserName" onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div class="col-md-5">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div class="col-12">
                <button type="submit" id="signUpButton" class="signUpButton">Log In</button>
            </div>
        </form>
        </div>
    );
}
export default LogIn;