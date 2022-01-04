import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import "./Explore.css";
import { Container, Row, Col } from "reactstrap";

function Explore(){
    const [stories, setStories] = useState([])
    useEffect(()=>{
        getStories()
    },[])

    const getStories = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/stories/all/')
        setStories(response.data)
    }

    return(
        <div className="exploreParent">
            {/* <select class="form-select" aria-label="Default select example">
            <option selected>Filter By Genre</option>
                        <option value="Action and Aventure">Action and Aventure</option>
                        <option value="Classics">Classics</option>
                        <option value="Comic/Graphic">Comic/Graphic</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Literary Fiction">Literary Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Short Story">Short Story</option>
                        <option value="Suspence/Thriller">Suspence/Thriller</option>
                        <option value="Biographies and Autobiographies">Biographies and Autobiographies</option>
                        <option value="Other">Other</option>
            </select> */}
            <container>
            <div>
                <Row>
                {stories.map((getStories)=>
                <Col xs="4">
                    <Card className="storyCard">
                        <Card.Body>
                            <h4 className="card-title">{getStories.storyName}</h4>
                            <h5 className="random">By: {getStories.storyAuthor_id}</h5>
                            <h6 className="random">Genre: {getStories.storyGenre}</h6>
                            <p className= "card-text">{getStories.storyDescription}</p>
                            <a href="#" className="btn btn-primary">Download</a>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
                </Row>
                </div>
            </container>
        </div>
    )
}
export default Explore;

