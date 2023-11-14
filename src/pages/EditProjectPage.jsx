import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function EditProjectPage (props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {projectId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API_URL}/projects/${projectId}`)
            .then( (response) => {
                setTitle(response.data.title)
                setDescription(response.data.description)
            }) 
            .catch((error) => console.log(error));
    }, [])

    const handleSubmitForm = (e) => {
        e.preventDefault()

        // prepare an object with the data that we send to the API
        const requestBody = {
            title: title,
            description: description
        }

        //send PUT request
        axios.put(`${API_URL}/projects/${projectId}`, requestBody)
            .then((response) => {
                navigate(`/projects/${projectId}`)
                
            })
            .catch((error) => console.log(error));
            

    }

    return (
        <div className="EditProjectPage">
            <h3>Edit the Project</h3>

            <form onSubmit={handleSubmitForm}>
                <label>
                    Title
                    <input 
                    type="text" 
                    name="title"
                    placeholder="enter the title"
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description
                    <textarea 
                    name="description" 
                    placeholder="short description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit">Update Project</button>


            </form>

        </div>
    )

}

export default EditProjectPage