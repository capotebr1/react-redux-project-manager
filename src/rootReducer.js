import { ProjectReducer } from "./projects/ProjectReducer";
import { ProcessReducer } from "./process/ProcessReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  projects: ProjectReducer,
  processes: ProcessReducer
});
