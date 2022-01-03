import React, {useState} from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const newPerson = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        middle_name: "middle",
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/auth/register/", newPerson);
        console.log(response.data);
        if (response.request.status === 201) {
            alert("You're in! Please sign in to explore.");
            window.location = "/login";
        }
    };

    return (
        <div className="signUpParent">
            <form class="row g-3" onSubmit={(event) => handleSubmit(event)}>
            <div class="col-md-5">
                <label for="inputFirstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="inputFirstName" onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            <div class="col-md-5">
                <label for="inputLastName" class="form-label">LastName</label>
                <input type="text" class="form-control" id="inputLastName"onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <div class="col-10">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail"onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div class="col-md-5">
                <label for="inputUserName" class="form-label">Username</label>
                <input type="username" class="form-control" id="inputUserName" onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div class="col-md-5">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div class="col-12">
                <button type="submit" id="signUpButton" class="signUpButton">Sign Up</button>
            </div>
        </form>
        </div>
    );
}
export default SignUp;