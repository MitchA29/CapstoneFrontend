import React, { useEffect, useState } from "react";
import "./Read.css"
import axios from 'axios';
import {Card} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";


function Read(){
    const [story, setStory] = useState([])
    const token = localStorage.getItem('token');

    useEffect(()=> {
        getStory()
    },[])

    const getStory = async (story) =>{
        console.log(story)
        await axios.get('http://127.0.0.1:8000/api/stories/read/'+ story, {
            headers: {
                Authorization: 'Bearer ' + token}});
        setStory()
    }

    return(
        <div className="readParent">
            <Container>
            <div className="readMaterial">
                <p className="storyDocument">{story.storyDocument}</p>
            </div>
            </Container>
        </div>
    );
}
export default Read;