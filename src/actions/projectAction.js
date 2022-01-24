import {
  ADD_PROJECT,
  LIST_PROJECT,
  SEARCH_PROJECT,
  EDIT_PROJECT,
  UPDATE_PROJECT,
  CANCEL_EDIT,
} from "../reducers/projectReducer.js";
import { getProjectList } from "../services/projectService.js";

export const getProjects = () => {
  const projects = getProjectList();

  return {
    type: LIST_PROJECT,
    projects: projects,
  };
};

export const searchProjects = (query) => {
  const projects = getProjectList();

  return {
    type: SEARCH_PROJECT,
    projects: projects,
    query: query
  };
};

export const addProject = (project = {}) => ({
  type: ADD_PROJECT,
  project: project,
});

export const editProject = (project) => ({
  type: EDIT_PROJECT,
  project: project,
});


export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project: project,
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT
});

