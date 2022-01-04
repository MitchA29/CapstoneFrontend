import React, {useState} from "react";
import "./Upload.css";
import axios from "axios";
import jwtDecode from "jwt-decode";


const Upload = () => {
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
        console.log(jwtDecode(token))
        event.preventDefault();
        newStory = {
        storyDocument: storyDocument,
        storyName: storyName,
        storyDescription: storyDescription,
        storyGenre: storyGenre,
        author: jwtDecode(token).user_id
        }
       
    
    console.log(token)
    let response = await axios.post("http://127.0.0.1:8000/api/stories/", newStory, {
        headers: {
            Authorization: 'Bearer ' + token}});
        console.log(response.data);
    }

    return (
        <div className="uploadParent">
            <div className="uploadForm">
                <form class="row g-3" onSubmit={(event) => handleSubmit(event)}>
                    <div class="col-md-5">
                        <label for="formFileSm" class="form-label" onChange={(event) => setStoryDocument(event.target.value)}>Document</label>
                        <input class="form-control" type="file" id="formFile"/>
                        </div>
                    <div class="col-md-5">
                        <label for="inputStoryName" class="form-label">Title</label>
                        <input type="text" class="form-control" id="inputStoryName"onChange={(event) => setStoryName(event.target.value)}/>
                    </div>
                    <div class="col-md-5">
                        <label for="inputStoryDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="inputStoryDescription" onChange={(event) => setStoryDescription(event.target.value)}/>
                    </div>
                    <div class="col-md-5">
                    <select class="form-select" aria-label="Genre" id="inputStoryGenre" onChange={(event) => setStoryGenre(event.target.value)}>
                        <option selected>Genre</option>
                        <option value="1">Action and Aventure</option>
                        <option value="2">Classics</option>
                        <option value="3">Comic/Graphic</option>
                        <option value="4">Mystery</option>
                        <option value="5">Fantasy</option>
                        <option value="6">Historical Fiction</option>
                        <option value="7">Horror</option>
                        <option value="8">Literary Fiction</option>
                        <option value="9">Romance</option>
                        <option value="10">Science Fiction</option>
                        <option value="11">Short Story</option>
                        <option value="12">Suspence/Thriller</option>
                        <option value="13">Biographies and Autobiographies</option>
                        <option value="14">Other</option>
                    </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" id="uploadButton" class="uploadButton">Upload</button>
                    </div>
                </form>
            </div>
            <div className="footer">
            </div>
        </div>
    );
}
export default Upload;