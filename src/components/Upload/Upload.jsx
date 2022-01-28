import React, {useState} from "react";
import "./Upload.css";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRoutes } from "react-router";


const Upload = ({user}) => {
    const [storyDocument, setStoryDocument] = useState("");
    const [storyName, setStoryName] = useState("");
    const [storyDescription, setStoryDescription] = useState("");
    const [storyGenre, setStoryGenre] = useState("");

    let newStory = {
        storyDocument: storyDocument,
        storyName: storyName,
        storyDescription: storyDescription,
        storyGenre: storyGenre,
    }

    let handleSubmit = async (event) => {
        const token = localStorage.getItem('token');
        const decodeToken = jwtDecode(token)
        console.log(jwtDecode(token))
        console.log(event)
        event.preventDefault();
        newStory = {
        storyDocument: storyDocument,
        storyName: storyName,
        storyDescription: storyDescription,
        storyGenre: storyGenre,
        storyAuthor: decodeToken.user_id
        }
       
    
    console.log(token)
    let response = await axios.post("http://127.0.0.1:8000/api/stories/", newStory, {
        headers: {
            Authorization: 'Bearer ' + token}});
        console.log(response.data);
        if (response.request.status === 201) {
            alert("Story created!");
            window.location = "/profile";
        }
    }

    return (
        <div className="uploadParent">
            <div className="uploadForm">
                <form class="row g-3" onSubmit={(event) => handleSubmit(event)}>
                    <div class="col-md-10">
                        <label for="inputStoryDocument" class="form-label">Paste Text Here</label>
                        <textarea class="form-control" id="inputStoryName" onChange={(event) => setStoryDocument(event.target.value)}rows="3"></textarea>
                    </div>
                    <div class="col-md-5">
                        <label for="inputStoryName" class="form-label">Title</label>
                        <input type="text" class="form-control" id="inputStoryName"onChange={(event) => setStoryName(event.target.value)}/>
                    </div>
                    <div class="col-md-5">
                    <select class="form-select" aria-label="Genre" id="inputStoryGenre" onChange={(event) => setStoryGenre(event.target.value)}>
                        <option selected>Genre</option>
                        <option value="Action and Aventure">Action and Aventure</option>
                        <option value="Classics">Classics</option>
                        <option value="Comic/Graphic">Comic/Graphic</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Literary Fiction">Literary Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Short Story">Short Story</option>
                        <option value="Suspence/Thriller">Suspence/Thriller</option>
                        <option value="Biographies and Autobiographies">Biographies and Autobiographies</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                    <div class="col-md-10">
                        <label for="inputStoryDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="inputStoryDescription" onChange={(event) => setStoryDescription(event.target.value)}/>
                    </div>
                    <div class="col-12">
                        <button type="submit" id="uploadButton" class="uploadButton">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Upload;