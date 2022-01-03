import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";

function Explore(){
    const [stories, setStories] = useState([])
    useEffect(()=>{
        getStories()
    },[])

    const getStories = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/stories/all/')
        setStories(response.data)
    }

    const addToFavorites = (story) =>{
        console.log(story)
    }

    return(
        <div className="exploreParent">
            {stories.map((getStories)=>
            <Card className="card mb-3">
                <Card.Body>
                    <h4 className="card-title">{getStories.storyName}</h4>
                    <h5 className="random">By: {getStories.storyAuthor_id.first_name}</h5>
                    <h6 className="random">Genre: {getStories.storyGenre}</h6>
                    <p className= "card-text">{getStories.storyDescription}</p>
                    <a href="#" className="btn btn-primary">Download</a>
                </Card.Body>
            </Card>
            )}
        </div>
    )
}
export default Explore;

