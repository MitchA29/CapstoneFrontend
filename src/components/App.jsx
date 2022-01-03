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
        } catch {
            console.log('hi')
        }
    }

    showStories = async()=>{
        let response = await axios.get(`http://127.0.0.1:8000/api/stories/all/`)
        console.log(response)
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
                        <Route path="/profile" exact element={<Profile/>} />
                        <Route path="/explore" element={<Explore/>} />
                        <Route path="/bookclubs" element={<BookClubs/>} />
                        <Route path="/upload" element={<Upload/>} />
                    </Routes>
              </div>
            </div>
        );
    }
}
export default App;
  