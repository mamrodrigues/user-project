export const ADD_USER = "ADD_USER";
export const LIST_USER = "LIST_USER";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    case LIST_USER:
      return [...state, action.users];
    default:
      return state;
  }
}

export default userReducer;