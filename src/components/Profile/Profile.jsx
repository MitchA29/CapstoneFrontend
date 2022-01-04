import React, { useEffect, useState } from "react";
import "./Profile.css"
import axios from 'axios';
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";

function Profile(){
    const [stories, setStories] = useState([])
    const [Clubs, setClubs] = useState([])
    const token = localStorage.getItem('token');
    useEffect(()=> {
        getStories()
        getClubs()
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

    return(
        <div className="profileParent">
            <div className="profileheader">
            <a className="uploadButton" href="/upload">Upload</a>
            <a className="createClubButton" href="/createclub">Create Club</a>
            </div>
            <div className="exploreParent">
            <container>
            <div>
                <Row>
                {stories.map((getStories)=>
                <Col xs="4">
                    <Card className="storyCard">
                        <Card.Body>
                            <h4 className="card-title">{getStories.storyName}</h4>
                            <h5 className="random">By: {getStories.storyAuthor_id.first_name}</h5>
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
            <div className="bookClubsParent">
            <container>
                <Row>
                {Clubs.map((getClubs)=>
                <Col xs="4">
            <Card className="clubCard">
                <Card.Body>
                    <h4 className="card-title">{getClubs.clubName}</h4>
                    <h5 className="random">ringleader: {getClubs.clubAuthor_id}</h5>
                    <p className= "card-text">{getClubs.clubDescription}</p>
                    <a href="#" className="btn btn-primary">Join</a>
                </Card.Body>
            </Card>
            </Col>
            )}
                </Row>
            </container>
            </div> 
        </div>
    );
}
export default Profile;