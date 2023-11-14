import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com/"

function CreateProjectPage () {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        
        // prevent page reload
        e.preventDefault()

        // prepare an object with the data that we send to the api
        const requestBody = {
            title: title,
            description: description
        }

        // when the property and state have the same name, we can use this format too:
        // const requestBody = {
        //     title,
        //     description 
        // }
        
        // send POST request
        axios.post(API_URL + "projects", requestBody)
            .then( (response) => {
                // project created, redirect
                navigate("/projects")
            })
            .catch((error) => {
                console.log("Error getting from API: " + error);
              });
    
    }
    
    
    return (
      <div className="CreateProjectPage">
        <h3>Add project</h3>

        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="enter the title"
              required={true}
              value={title}
              onChange={(e) => { setTitle (e.target.value)}}
            />
          </label>
          <label >
            Description
            <input
              type="text"
              name="description"
              placeholder="short description"
              value={description}
              onChange={(e) => { setDescription (e.target.value)}}
            />
          </label>

          <button>Create Project</button>
        </form>
      </div>
    );
}

export default CreateProjectPage