import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//const API_URL = "https://project-management-api-4641927fee65.herokuapp.com/"


function ProjectListPage (){

    const [projects, setProjects] = useState([])

    useEffect(function (){
        axios.get("https://project-management-api-4641927fee65.herokuapp.com/projects?_embed=tasks")
        .then( (response) => {
            setProjects(response.data)
        })
        .catch( (error) => {
            console.log("Error getting from API: " + error)
        })
    }, [])

    return (
      <div className="ProjectListPage">
        <h1>List of projects:</h1>

        {projects.map((project) => {
          return (
            <div className="ProjectCard card" key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
}

export default ProjectListPage