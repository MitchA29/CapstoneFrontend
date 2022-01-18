import axios from "axios";
import "./App.css";
import React,{Component} from 'react';
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import jwtDecode from "jwt-decode";
import LandingPage from "./LandingPage/LandingPage"
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import Profile from "./Profile/Profile";
import Explore from "./Explore/Explore";
import BookClubs from "./BookClubs/BookClubs"
import Upload from "./Upload/Upload";
import LogoutUser from "./Logout/Logout";
import CreateClub from "./CreateClub/CreateClub";
import Resources from "./Resources/Resources";


class App extends Component {
    constructor(props){
        super(props);
        this.state = { };
}

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt)
            this.setState({user});
        } catch (error){
            console.log(error);
        }
    }

    render(){
        const user = this.state.user;
        return(
            <div className="App">
                <NavBar user = {user} />
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage/>} />
                        <Route path="/signup" exact element={<SignUp/>} />
                        <Route path="/login" exact element={<LogIn/>} />
                        <Route path="/resources" exact element={<Resources/>} />
                        <Route path="/profile" exact element={<Profile/>} />
                        <Route path="/explore" element={<Explore/>} />
                        <Route path="/bookclubs" element={<BookClubs/>} />
                        <Route path="/upload" element={<Upload/>} />
                        <Route path="/logout" element={<LogoutUser/>} />
                        <Route path="/createclub" element={<CreateClub/>} />
                    </Routes>
              </div>
            </div>
        );
    }
}
export default App;
  