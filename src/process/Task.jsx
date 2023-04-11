

const Task = ({name, completed}) => {

  return (
    <div className="task">
      <h4>
        {name}
      </h4>
      <h4>
        {completed ? "Complete" : "Incomplete"}
      </h4>
      <button>
        {completed ? "X" : "Tick"}
      </button>
      
    </div>
  )
}

export default Task