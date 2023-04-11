export const ProcessReducer = (state = {}, action) => {
  switch (action.type) {
    case "process/showProcess":
      return action.payload;
    default:
      return state;
  }
};
