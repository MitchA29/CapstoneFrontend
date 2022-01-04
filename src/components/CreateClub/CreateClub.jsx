import React, {useState} from "react";
import "./CreateClub.css";
import axios from "axios";
import jwtDecode from "jwt-decode";


const CreateClub = () => {
    const [clubName, setClubName] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    const [clubBook, setClubBook] = useState("");

    let newClub = {
        clubName: clubName,
        clubDescription: clubDescription,
        clubBook: clubBook,
    }

    let handleSubmit = async (event) => {
        const token = localStorage.getItem('token');
        console.log(jwtDecode(token))
        event.preventDefault();
        newClub = {
        clubName: clubName,
        clubDescription: clubDescription,
        clubBook: clubBook,
        creator: jwtDecode(token).user_id
        }
       
    
    console.log(token)
    let response = await axios.post("http://127.0.0.1:8000/api/clubs/", newClub, {
        headers: {
            Authorization: 'Bearer ' + token}});
        console.log(response.data);
        if (response.request.status === 201) {
            alert("Club created!");
            window.location = "/profile";
        }
    }

    return (
        <div className="createClubParent">
            <div className="createClubForm">
                <form class="row g-3" onSubmit={(event) => handleSubmit(event)}>
                    <div class="col-md-5">
                        <label for="inputClubName" class="form-label">Club Name</label>
                        <input type="text" class="form-control" id="inputStoryName"onChange={(event) => setClubName(event.target.value)}/>
                        </div>
                    <div class="col-md-5">
                        <label for="inputClubBook" class="form-label">Club Book</label>
                        <input type="text" class="form-control" id="inputStoryName"onChange={(event) => setClubBook(event.target.value)}/>
                    </div>
                    <div class="col-md-5">
                        <label for="inputClubDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="inputStoryDescription" onChange={(event) => setClubDescription(event.target.value)}/>
                    </div>
                    <div class="col-12">
                        <button type="submit" id="createClubButton" class="createClubButton">Create</button>
                    </div>
                </form>
            </div>
            <div className="footer">
            </div>
        </div>
    );
}
export default CreateClub;