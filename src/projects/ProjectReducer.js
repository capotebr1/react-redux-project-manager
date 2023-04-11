export const ProjectReducer = (state = [], action) => {
  switch (action.type) {
    case "project/addProject":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          process: 0,
          todos: []
        }
      ];
    case "project/addTask":{
      const newState = state.map(p => {
        if(p.id === action.payload.id){
          console.log("sape");
          console.log(p.todos);
          p.todos.push({
            id: action.payload.id,
            name: action.payload.name,
            completed: action.payload.completed
          })
          return p
        }
        else return p
      });
      return newState;
    }

    default:
      return state;
  }
};
