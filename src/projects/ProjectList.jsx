import ProjectListItems from "./ProjectListItems";
import { useSelector } from "react-redux";
import ProjectForm from "./ProjectForm";

const ProjectList = ({handleShowTask}) => {
  const selectProjects = (state) => state.projects;
  const projects = useSelector(selectProjects);
  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm />
      <div className="projects-container">
        {projects.map((p) => (
          <ProjectListItems
            key={p.id}
            id={p.id}
            name={p.name}
            process={p.process}
            handleShowTask={handleShowTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
