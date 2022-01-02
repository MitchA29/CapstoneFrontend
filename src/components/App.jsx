import axios from "axios";
import "./App.css";
import React,{Component} from 'react';
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import jwtDecode from "jwt-decode";
import LandingPage from "./LandingPage/LandingPage"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:''     
    }
}

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt)
            this.setState({
                user
            });
        } catch {
            console.log('hi')
        }
    }

    // showProdcuts = async()=>{
    //     let response = await axios.get(`https://localhost:44394/api/products/`)
    //     console.log(response)
    // }

    render(){
        const user = this.state.user;
        return(
            <div className="App">
                <NavBar user = {user} />
                <div>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>} />
                    </Routes>
              </div>
            </div>
        );
    }
}
export default App;
  