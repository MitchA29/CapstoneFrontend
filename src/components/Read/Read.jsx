import React, { useEffect, useState } from "react";
import "./Read.css"
import axios from 'axios';
import { Container} from "reactstrap";
import { useParams } from "react-router";


function Read(){
    const  {storyId} = useParams()
    const token = localStorage.getItem('token');
    const [story, setStory] = useState([])

    useEffect(()=> {
        getStory()
    },[])

    const getStory = async () =>{
        console.log(storyId)
        let response = await axios.get('http://127.0.0.1:8000/api/stories/read/'+ storyId, {
            headers: {
                Authorization: 'Bearer ' + token}});
        setStory(response.data)
    }

    return(
        <div className="readParent">
            <Container>
                
                <div className="readMaterial">
                    <h1 className="storyTitle">{story.storyName}</h1>
                    <p className="storyDocument">{story.storyDocument}</p>
                </div>
            </Container>
        </div>
    );
}
export default Read;