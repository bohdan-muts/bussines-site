import { useParams } from "react-router-dom";
import { projects } from "../arrays/projects";
function ProjectPage() {
    let {id} = useParams(),
    project = projects[id];
    return ( 
        <h1>{project.title}</h1>
     );
}

export default ProjectPage;