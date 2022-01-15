import React, { useEffect, useState } from "react";
import "./Profile.css"
import axios from 'axios';
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";


function Profile(){
    const [stories, setStories] = useState([])
    const [clubs, setClubs] = useState([])
    const [favorites, setFavorites] = useState([])
    const token = localStorage.getItem('token');
    useEffect(()=> {
        getStories()
        getClubs()
        getFavorites()
    },[])

    const getStories = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/stories/', {
            headers: {
                Authorization: 'Bearer ' + token}});
        setStories(response.data)
    }

    const getClubs = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/clubs/', {
            headers: {
                Authorization: 'Bearer ' + token}});
        setClubs(response.data)
    }

    const getFavorites = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/favorites/', {
            headers: {
                Authorization: 'Bearer ' + token}});
        console.log(response.data)
        setFavorites(response.data)
    }

    return(
        <div className="profileParent">
            <div className="storyHeader">
                <div className="storyHeaderTitle">
                    <h1>My Stories</h1>
                </div>
                <a className="uploadButtonProfile" href="/upload">Upload</a>
            </div>
            <div className="exploreParentProfile">
                <Container>
                    <div>
                        <Row>
                        {stories.map((setStories)=>
                        <Col xs="4">
                            <Card className="cardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{setStories.storyName}</h4>
                                    <h5 className="random">By: {setStories.storyAuthor_id.first_name}</h5>
                                    <h6 className="random">Genre: {setStories.storyGenre}</h6>
                                    <p className= "card-text">{setStories.storyDescription}</p>
                                    <a href="#" className="downloadButton">Download</a>
                                    <a href="#" className="downloadButton" >Delete</a>
                                    <a href="#" className="downloadButton" >...</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="storyHeader">
                <div className="favoritesHeaderTitle">
                    <h1>My Favorites</h1>
                </div>
            </div>
            <div className="exploreParentProfile">
                <Container>
                    <div>
                        <Row>
                        {favorites.map((setFavorites)=>
                        <Col xs="4">
                            <Card className="cardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{setFavorites.favoriteStory.storyName}</h4>
                                    <h5 className="random">By: {setFavorites.favoriteStory.username}</h5>
                                    <h6 className="random">Genre: {setFavorites.favoriteStory.storyGenre}</h6>
                                    <p className= "card-text">{setFavorites.favoriteStory.storyDescription}</p>
                                    <a href="#" className="downloadButton">Download</a>
                                    <a href="#" className="downloadButton">Unfavorite</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="storyHeader">
                <div className="clubsHeaderTitle">
                    <h1>My clubs</h1>
                </div>
                <a className="createClubButtonProfile" href="/createclub">Create Club</a>
            </div>
            <div className="exploreParentProfile">
                <Container>
                    <div>
                        <Row>
                        {clubs.map((getClubs)=>
                        <Col xs="4">
                            <Card className="cardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{getClubs.clubName}</h4>
                                    <h5 className="random">ringleader: {getClubs.clubAuthor_id}</h5>
                                    <h5 className="random">book of the week: {getClubs.clubBook}</h5>
                                    <p className= "card-text">{getClubs.clubDescription}</p>
                                    <a href="#" className="downloadButton" >Delete</a>
                                    <a href="#" className="downloadButton" >...</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </Container>
            </div> 
        </div>
    );
}
export default Profile;