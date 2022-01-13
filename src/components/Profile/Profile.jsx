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
                <container>
                    <div>
                        <Row>
                        {stories.map((getStories)=>
                        <Col xs="4">
                            <Card className="storyCardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{getStories.storyName}</h4>
                                    <h5 className="random">By: {getStories.storyAuthor_id}</h5>
                                    <h6 className="random">Genre: {getStories.storyGenre}</h6>
                                    <p className= "card-text">{getStories.storyDescription}</p>
                                    <a href="#" className="btn btn-primary" id="downloadButton">Download</a>
                                    <a href="#" className="btn btn-primary" id="downloadButton">Delete</a>
                                    <a href="#" className="btn btn-primary" >...</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </container>
            </div>
            <div className="favoritesHeader">
                <div className="favoritesHeaderTitle">
                    <h1>My Favorites</h1>
                </div>
            </div>
            <div className="favoriteParentProfile">
                <container>
                    <div>
                        <Row>
                        {favorites.map((getFavorites)=>
                        <Col xs="4">
                            <Card className="storyCardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{getFavorites.storyName}</h4>
                                    <h5 className="random">By: {getFavorites.storyAuthor_id}</h5>
                                    <h6 className="random">Genre: {getFavorites.storyGenre}</h6>
                                    <p className= "card-text">{getFavorites.storyDescription}</p>
                                    <a href="#" className="btn btn-primary" id="downloadButton">Download</a>
                                    <a href="/" className="deleteFavoritesButton" id="downloadButton">Delete</a>
                                    <a href="#" className="btn btn-primary" >...</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </container>
            </div>
            <div className="clubsHeader">
                <div className="clubsHeaderTitle">
                    <h1>My clubs</h1>
                </div>
                <a className="createClubButtonProfile" href="/createclub">Create Club</a>
            </div>
            <div className="bookClubsParentProfile">
                <container>
                    <div>
                        <Row>
                        {clubs.map((getClubs)=>
                        <Col xs="4">
                            <Card className="clubCardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{getClubs.clubName}</h4>
                                    <h5 className="random">ringleader: {getClubs.clubAuthor_id}</h5>
                                    <h5 className="random">book of the week: {getClubs.clubBook}</h5>
                                    <p className= "card-text">{getClubs.clubDescription}</p>
                                    <a href="/" className="btn btn-primary"id="downloadButton" >Delete</a>
                                    <a href="#" className="btn btn-primary" >...</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </container>
            </div> 
        </div>
    );
}
export default Profile;