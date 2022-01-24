import { ADD_USER, LIST_USER } from "../reducers/userReducer.js";
import { getUserList } from "../services/userService.js";

export const getUsers = () => {
  const users = getUserList();

  return {
    type: LIST_USER,
    users: users,
  };
};

export const addUser = (user = {}) => ({
  type: ADD_USER,
  user: user,
});
