import "./styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectList from "./projects/ProjectList";
import Process from "./process/Process";
export default function App() {
  const projectProcessSelector = (state) => state.projects;
  const projectProcess = useSelector(projectProcessSelector);

  const [showedProcess, setShowedProcess] = useState(null);
  const handleShowTask = (id) => {
    const showedTask = projectProcess.filter((p) => p.id === id);
    const [s] = showedTask;
    setShowedProcess(s);
  };

  return (
    <div className="App">
      <ProjectList handleShowTask={handleShowTask} />
      {showedProcess && showedProcess ? (
        <Process
          id={showedProcess.id}
          name={showedProcess.name}
          process={showedProcess.process}
          todos={showedProcess.todos}
        />
      ) : null}
    </div>
  );
}
