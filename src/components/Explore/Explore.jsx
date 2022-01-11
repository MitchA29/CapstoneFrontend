import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import "./Explore.css";
import { Container, Row, Col } from "reactstrap";

function Explore(){
    const [stories, setStories] = useState([])
    const [filteredStories, setFilteredStories] = useState([])
    useEffect(()=>{
        getStories()
        getFilteredStories()
    },[])

    const getStories = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/stories/all/')
        setStories(response.data)
    }

    const getFilteredStories = async (event) => {
        console.log(event)
        let filtered = stories.filter(s => s.storyGenre === event)
        setFilteredStories(filtered)
    }

    return(
        <div className="exploreParent">
            <Container className="exploreAll">
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
            </Container>
            <div className="exploreFilter">
            <select className="filter" aria-label="Default select example" onChange={(event) => getFilteredStories(event.target.value)}>
            <option defaultValue>Filter By Genre</option>
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
            </select>
            <Container className="exploreAll">
            <div>
                <Row>
                {filteredStories.map((getFilteredStories)=>
                <Col xs="4">
                    <Card className="storyCard" key={Math.random()}>
                        <Card.Body>
                            <h4 className="card-title">{getFilteredStories.storyName}</h4>
                            <h5 className="random">By: {getFilteredStories.storyAuthor_id.first_name}</h5>
                            <h6 className="random">Genre: {getFilteredStories.storyGenre}</h6>
                            <p className= "card-text">{getFilteredStories.storyDescription}</p>
                            <a href="#" className="btn btn-primary">Download</a>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
                </Row>
                </div>
            </Container>
            </div>
        </div>
    )
}
export default Explore;

