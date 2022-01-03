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
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Explore;

