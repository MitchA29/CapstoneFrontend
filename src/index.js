import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./components/App"
import 'bootstrap/dist/css/bootstrap.css';


reactDom.render(
<Router>
    <App />
</Router>,
document.getElementById('root')
);