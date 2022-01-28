import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import "./Explore.css";
import { Container, Row, Col } from "reactstrap";
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom"

function Explore(props){
    const [stories, setStories] = useState([])
    const [filteredStories, setFilteredStories] = useState([])
    const [favoriteStory, setFavoriteStory] = useState("");
    const [storyAuthorUsername] = useState("");
    useEffect(()=>{
        getStories()
        getFilteredStories()
        handleSubmit()
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

    const handleSubmit = async (Object) => {
        const token = localStorage.getItem('token');
        const decodeToken = jwtDecode(token)
        console.log(decodeToken.user_id)
        console.log(Object.id)
        let newFavorite = {
            favoriteStory: Object.id,
            favoriteOwner: decodeToken.user_id,
            }
        let response = await axios.post("http://127.0.0.1:8000/api/favorites/", newFavorite, {
        headers: {
            Authorization: 'Bearer ' + token}});
        console.log(response.data);
        if (response.request.status === 201) {
            window.location = "/profile";
        }
    }

    return(
        <div className="exploreParent">
            <div className="exploreFilter">
            <select className="filter" aria-label="Default select example" onChange={(storyid) => getFilteredStories(storyid.target.value)}>
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
                {filteredStories.map((Object)=>
                <Col xs="4">
                    <Card className="storyCard" key={Math.random()}>
                        <Card.Body>
                            <h4 className="card-title">{Object.storyName}</h4>
                            <h5 className="random">By: {Object.storyAuthor.username}</h5>
                            <h6 className="random">Genre: {Object.storyGenre}</h6>
                            <p className= "card-text">{Object.storyDescription}</p>
                            <Link className="downloadButton" to={`/explore/${Object.id}`}>Read</Link>
                            <a href="#" className="favoriteButton"onClick={() => handleSubmit(Object)}>Favorite</a>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
                </Row>
                </div>
            </Container>
            </div>
            <Container className="exploreAll">
            <div>
                <Row>
                {stories.map((Object) =>
                <Col xs="4">
                    <Card className="storyCard" key={Math.random()}>
                        <Card.Body>
                            <h4 className="card-title">{Object.storyName}</h4>
                            <h5 className="random">By: {Object.storyAuthor.username}</h5>
                            <h6 className="random">Genre: {Object.storyGenre}</h6>
                            <p className= "card-text">{Object.storyDescription}</p>
                            <Link className="downloadButton" to={`/explore/${Object.id}`}>Read</Link>
                            <a href="#" className="favoriteButton"onClick={() => handleSubmit(Object)}>Favorite</a>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
                </Row>
                </div>
            </Container>
        </div>
    )
}
export default Explore;

