import { useRef } from "react";
import { useDispatch } from "react-redux";

const ProjectForm = () => {
  const projectName = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const randomID = Math.round(Math.random() * 10000);
    dispatch({
      type: "project/addProject",
      payload: {
        id: randomID,
        name: projectName.current.value
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">New Project Name: </label>
        <input ref={projectName} type="text" placeholder="add new project" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;
