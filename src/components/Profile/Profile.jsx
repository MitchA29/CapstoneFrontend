import React, { useEffect, useState } from "react";
import "./Profile.css"
import axios from 'axios';
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import readStory from "../Read/Read";
import {Link} from "react-router-dom"


function Profile(){
    const [stories, setStories] = useState([])
    const [clubs, setClubs] = useState([])
    const [favorites, setFavorites] = useState([])
    const token = localStorage.getItem('token');
    const url = "http://localhost:3000/read/";
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

    const deleteStory = async (story) =>{
        console.log(story)
        await axios.delete('http://127.0.0.1:8000/api/stories/delete/'+ story, {
            headers: {
                Authorization: 'Bearer ' + token}});
        getStories()
    }

    const getClubs = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/clubs/', {
            headers: {
                Authorization: 'Bearer ' + token}});
        setClubs(response.data)
    }

    const deleteClub = async (club) =>{
        console.log(club)
        await axios.delete('http://127.0.0.1:8000/api/clubs/delete/'+ club, {
            headers: {
                Authorization: 'Bearer ' + token}});
        getClubs()
    }

    const getFavorites = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/favorites/', {
            headers: {
                Authorization: 'Bearer ' + token}});
        console.log(response.data)
        setFavorites(response.data)
    }

    const deleteFavorite = async (favorite) =>{
        console.log(favorite)
        await axios.delete('http://127.0.0.1:8000/api/favorites/delete/'+ favorite, {
            headers: {
                Authorization: 'Bearer ' + token}});
        getFavorites()
    }

    return(
        <div className="profileParent">
            <div className="storyHeader">
                <div className="headerTitle">
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
                                    <h5 className="random">By: {setStories.storyAuthor.username}</h5>
                                    <h6 className="random">Genre: {setStories.storyGenre}</h6>
                                    <p className= "card-text">{setStories.storyDescription}</p>
                                    <Link className="downloadButton" to={`/explore/${setStories.id}`}>Read</Link>
                                    <a href="#" className="downloadButton" onClick={() => deleteStory(setStories.id)} >Delete</a>
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
                <div className="headerTitle">
                    <h1>Favorites</h1>
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
                                    <h5 className="random">By: {setFavorites.favoriteStory.storyAuthor.username}</h5>
                                    <h6 className="random">Genre: {setFavorites.favoriteStory.storyGenre}</h6>
                                    <p className= "card-text">{setFavorites.favoriteStory.storyDescription}</p>
                                    <Link className="downloadButton" to={`/explore/${setFavorites.favoriteStory.id}`}>Read</Link>
                                    <a href="#" className="downloadButton" onClick={() => deleteFavorite(setFavorites.id)}>Unfavorite</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="storyHeader">
                <div className="headerTitle">
                    <h1>My clubs</h1>
                    <a className="createClubButtonProfile" href="/createclub">Create Club</a>
                </div>
            </div>
            <div className="exploreParentProfile">
                <Container>
                    <div>
                        <Row>
                        {clubs.map((setClubs)=>
                        <Col xs="4">
                            <Card className="cardProfile">
                                <Card.Body>
                                    <h4 className="card-title">{setClubs.clubName}</h4>
                                    <h5 className="random">ringleader: {setClubs.clubCreator.username}</h5>
                                    <h5 className="random">book of the week: {setClubs.clubBook}</h5>
                                    <p className= "card-text">{setClubs.clubDescription}</p>
                                    <a href="#" className="downloadButton" onClick={() => deleteClub(setClubs.id)} >Delete</a>
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