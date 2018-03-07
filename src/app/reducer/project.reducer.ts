import {Project} from "../project/project";
import * as ProjectActions from "../actions/project.actions";
import {Actions} from "../actions/project.actions";

export interface IProject {
  selectedProject: Project;
}

export const initialState: IProject = {
  selectedProject: null
}

export const project = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ProjectActions.CREATE_PROJECT:
      return {...state, selectedProject: action.payload};
    case ProjectActions.UPDATE_PROJECT:
      return {...state, selectedProject: action.payload};
    case ProjectActions.SELECT_PROJECT:
      console.log(action.payload)
      return {...state, selectedProject: action.payload};
    default:
      return state;
  }
};

export const projectSelector = state => state.selectedProject;
