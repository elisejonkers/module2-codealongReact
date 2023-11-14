import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com/"

function ProjectListPage() {
  console.log("ProjectListPage has been invoked...");

  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(API_URL + "projects?_embed=tasks")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("Error getting from API: " + error);
      });
  };

  useEffect(() => {
    getAllProjects();
  }, []);

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

export default ProjectListPage;
