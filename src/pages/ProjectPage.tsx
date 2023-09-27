
import { useParams } from "react-router-dom";
import { titles } from "../projectDetails/titles";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import BackButton from "../components/BackButton";
import {projectsInfo} from "../projectDetails/projects";

const ProjectPage = () => {

    const url = useParams();
    const id = parseInt(url.id);
    const nav = useNavigate();

    //wrong path
    useEffect(() => {
      if (id === undefined || id >= titles.length) {
        nav("/projects/error")
      }
    }, []);

    //move to github
    const handleMoveToGitHub = () => {
      window.open(projectsInfo[id].github, "_blank");
    }

    //move to linkedin
    const handleMoveToLinkedIn = () => {
      window.open(projectsInfo[id].linkedin, "_blank");
    }

    //return
    return (
      <>
        <BackButton prev="/projects"/>

        <div>
          <h1 className="text-center font-medium text-2xl">{projectsInfo[id].title}</h1> 
          <p className="p-2"><b>Description:</b>   {projectsInfo[id].desc}</p>

          {/* Github and LinkedIn Link*/}
          <div className="text-center m-2">
            <button onClick={handleMoveToGitHub} className="bg-indigo-600 m-2 py-2 px-4 rounded-full">
              View Source Code on Github
            </button> <br/>

            <button onClick={handleMoveToLinkedIn} className="bg-indigo-600 m-2 py-2 px-4 rounded-full">
              View Project on LinkedIn
            </button>
          </div>

        </div>
      </>
    )
  }
  
  export default ProjectPage;