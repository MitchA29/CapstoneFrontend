import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import "./BookClubs.css";

function BookClubs(){
    const [Clubs, setClubs] = useState([])
    useEffect(()=>{
        getClubs()
    },[])

    const getClubs = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/clubs/all/')
        setClubs(response.data)
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
                    <a href="#" className="joinButton">Join</a>
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

