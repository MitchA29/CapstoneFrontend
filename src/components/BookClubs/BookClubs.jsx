import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import "./BookClubs.css";
import jwtDecode from "jwt-decode";

function BookClubs(){
    const [Clubs, setClubs] = useState([])
    useEffect(()=>{
        getClubs()
        handleSubmit()
    },[])

    const getClubs = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/clubs/all/')
        setClubs(response.data)
    }

    const handleSubmit = async (Object) => {
        const token = localStorage.getItem('token');
        const decodeToken = jwtDecode(token)
        console.log(decodeToken.user_id)
        console.log(Object.id)
        let newMember = {
            club: Object.id,
            clubMember: decodeToken.user_id,
            }
        let response = await axios.post("http://127.0.0.1:8000/api/members/", newMember, {
        headers: {
            Authorization: 'Bearer ' + token}});
        console.log(response.data);
        if (response.request.status === 201) {
            window.location = "/profile";
        }
    }

    return(
        <div className="bookClubsParent">
            <Container>
                <Row>
                {Clubs.map((getClubs)=>
                <Col xs="4">
            <Card className="clubCard">
                <Card.Body>
                    <h4 className="card-title">{getClubs.clubName}</h4>
                    <h5 className="random">ringleader: {getClubs.clubCreator.username}</h5>
                    <h5 className="random">book of the week: {getClubs.clubBook}</h5>
                    <p className= "card-text">{getClubs.clubDescription}</p>
                    <a href="#" className="favoriteButton"onClick={() => handleSubmit(getClubs)}>Join Club</a>
                </Card.Body>
            </Card>
            </Col>
            )}
                </Row>
            </Container>
        </div>
    )
}
export default BookClubs;

