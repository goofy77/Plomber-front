import {User} from "../user/user";
import * as emailExists from "../reducer/email.reducer";
import * as login from "../reducer/login.reducer";
import * as project from "../reducer/project.reducer";
import * as drawing from "../reducer/drawing.reducer";
import * as projectList from "../reducer/project-list.reducer";
import * as registration from "../reducer/registration.reducer";
import {compose} from "@ngrx/core/compose";
import {combineReducers} from "@ngrx/store";
import {routerReducer} from "@ngrx/router-store";
import {createSelector} from "reselect";


export const reducers = {
  drawing: drawing.drawing,
  // drawingList: drawingList.drawingList,
  emailExists: emailExists.emailReducer,
  login: login.login,
  project: project.project,
  projectList: projectList.projectList,
  registration: registration.registration,
  routerReducer
};

export interface AppStore {
  user: User,
  registrationUser: registration.IRegister,
  drawing: drawing.IDrawing,
  emailExists: emailExists.IEmailExists,
  projectList: projectList.IProjectState,
  project: project.IProject,
  // drawingList: drawingList.IDrawingList,
  login: login.ILogin
}

export function reducer(state: AppStore, action: any) {
  return compose(combineReducers)(reducers)(state, action);
}

const getDrawing = state => state.drawing;
const checkEmailExists = state => state.emailExists;
const getProjectListSelector = state => state.projectList;
const getProjectSelector = state => state.project;
const getLoginSelector = state => state.login;
// const getDrawingListSelector = state => state.drawingList;

export const getCurrentDrawing = createSelector(getDrawing, drawing.drawingSelector);
export const getEmailExists = createSelector(checkEmailExists, emailExists.emailExistSelector);
export const getProjectList = createSelector(getProjectListSelector, projectList.projectListSelector);
export const getProject = createSelector(getProjectSelector, project.projectSelector);
export const getLoginState = createSelector(getLoginSelector, login.loginSelector);
// export const getDrawingList = createSelector(getDrawingListSelector, drawingList.drawingListSelector);
