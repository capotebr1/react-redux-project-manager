import { useDispatch } from "react-redux";
import { useRef } from "react";
const ProcessForm = ({ id }) => {
  const taskName = useRef();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault()
    const randomID = Math.round(Math.random() * 10000)
    dispatch({
      type: "project/addTask",
      payload: {
        id: randomID,
        name: taskName.current.value,
        completed: false
      }
    });
  };

  return (
    <div>
      <form className="process-form" onSubmit={handleSubmit}>
        <label htmlFor="">Add task:</label>
        <input ref={taskName} type="text" placeholder="Task name" />
        <button type="submit">submit task</button>
      </form>
    </div>
  );
};

export default ProcessForm;
