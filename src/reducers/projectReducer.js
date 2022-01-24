export const ADD_PROJECT = "ADD_PROJECT";
export const LIST_PROJECT = "LIST_PROJECT";
export const SEARCH_PROJECT = "SEARCH_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const CANCEL_EDIT = "CANCEL_EDIT";

const projectReducer = (
  state = { projects: [], allProjects: [], isEditing: false },
  action
) => {
  switch (action.type) {
    case ADD_PROJECT:
      action.project.id = Math.floor(Math.random() * 100);

      return {
        ...state,
        projects: [...state.projects, action.project],
      };

    case LIST_PROJECT:
      return {
        ...state,
        projects: [...state, action.projects],
      };

    case SEARCH_PROJECT:
      if (action.query.length === 0) {
        return {
          ...state,
          projects: state.allProjects,
        };
      } else {
        if (state.allProjects.length < state.projects.length) {
          state.allProjects = state.projects;
        }

        let queryResult = state.allProjects.filter((p) => {
          return (
            p.name.indexOf(action.query) !== -1 ||
            p.description.indexOf(action.query) !== -1
          );
        });

        return {
          ...state,
          projects: queryResult,
        };
      }

    case EDIT_PROJECT:
      return {
        ...state,
        isEditing: true,
        project: action.project,
      };

    case CANCEL_EDIT:
      return {
        ...state,
        isEditing: false,
        project: null,
      };

    case UPDATE_PROJECT:
      const result = state.projects.map((p) => {
        if (p.id === action.project.id) {
          p = action.project;
        }
      });

      return {
        ...state,
        projects: result,
        isEditing: false,
        project: {},
      };

    default:
      return state;
  }
};

export default projectReducer;
