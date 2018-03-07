import {Project} from "../project/project";
import * as ProjectListActions from "../actions/project-state.actions";
import {Actions} from "../actions/project-state.actions";

export interface IProjectState {
  projectList: Project[];
}

export const initialState: IProjectState = {
  projectList: []
};

export const projectList = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ProjectListActions.ADD_PROJECTS:
      return {...state, projectList: action.payload};
    case ProjectListActions.DELETE_PROJECT:
      return {...state, projectList: state.projectList.filter(item => item.projectId !== action.payload.projectId)};
    default:
      return state;
  }
};
// state.filter(comment => comment.id !== commentId);
export const projectListSelector = (state: IProjectState) => state.projectList;
// export const projectSelector = (state: IProjectState) => state.selectedProject;

