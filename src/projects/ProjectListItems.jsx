import { useSelector, useDispatch } from "react-redux";

const ProjectListItems = ({ id, name, process, handleShowTask }) => {
  const selectProject = (state) => state.projects.filter((p) => p.id === id);
  const actualProject = useSelector(selectProject);
  const dispatch = useDispatch();
  const handleShow = () => {
    const [project] = actualProject;
    handleShowTask(project.id);
    dispatch({
      type: "project/showProcess",
      payload: {
        id: project.id,
        name: project.name,
        todos: project.todos
      }
    });
  };

  return (
    <div className="process">
      <div className="process-header">
        <h4>Name: {name}</h4>
        <h4>Process: {process}</h4>
      </div>
      <button onClick={handleShow}>Show</button>
      <button>Borrar</button>
    </div>
  );
};

export default ProjectListItems;
