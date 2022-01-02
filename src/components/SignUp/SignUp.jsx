import React, {Component} from "react";
import "./SignUp.css";

export default class SignUp extends Component {
    render() {
        return (
            <div className="signUpParent">
                <form class="row g-3">
                <div class="col-md-5">
                    <label for="inputFirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="inputFirstName"/>
                </div>
                <div class="col-md-5">
                    <label for="inputLastName" class="form-label">LastName</label>
                    <input type="text" class="form-control" id="inputLastName"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail"/>
                </div>
                <div class="col-md-5">
                    <label for="inputUserName" class="form-label">Username</label>
                    <input type="username" class="form-control" id="inputUserName"/>
                </div>
                <div class="col-md-5">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
                <div class="col-12">
                    <button type="submit" id="signUpButton" class="signUpButton">Sign Up</button>
                </div>
            </form>
            </div>
        )
    }
}