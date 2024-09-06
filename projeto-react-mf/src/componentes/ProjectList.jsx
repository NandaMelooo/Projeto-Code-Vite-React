import "./ProjectList.css";
import { useState, useEffect } from "react";

//ASSETS
import LikedFilled from "../assets/like-filled.svg";
import Liked from "../assets/like.svg";

//UTILS
import { getApiData } from "../services/apiServices";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    try {
      const projectsResponse = await getApiData("projects");
      if (projectsResponse !== null) {
        setProjects(projectsResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="project-grid">
        {projects
          ? projects.map((project) => (
              <div
                className="project-card d-flex jc-center al-center fd-direction"
                key={project.id}
              >
                <div
                  className="thumb tertiary-background"
                  style={{ backgroundImage: `url(${project.thumb})` }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <img src={LikedFilled} height="20px" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectList;
