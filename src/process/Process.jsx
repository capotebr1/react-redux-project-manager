import { useSelector } from "react-redux";
import Task from "./Task"
import ProcessForm from "./ProcessForm";
const Process = ({ id, name, process, todos }) => {
  return (
    <div>
      <h1>{name}</h1>
      <ProcessForm id={id} />
      <h2>
        Process: {process}%
      </h2>
      <div className="tasks-container">
        {todos.map(t => <Task name={t.name} compelted={t.completed} />)}
      </div>
      
    </div>
  );
};

export default Process;
