import {Action} from "@ngrx/store";
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const GET_PROJECTS = 'GET_PROJECTS';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export class AddProjects implements Action {
  readonly type = ADD_PROJECTS;

  constructor(public payload: any) {
  }
}

export class GetProjects implements Action {
  readonly type = GET_PROJECTS;

  // constructor(public payload: any) {
  // }

  constructor() {
  }
}

export class DeleteProject implements Action {
  readonly type = DELETE_PROJECT;

  constructor(public payload: any) {
  }
}

export type Actions = AddProjects | GetProjects | DeleteProject;
