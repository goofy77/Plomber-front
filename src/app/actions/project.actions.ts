import {Action} from "@ngrx/store";


export const CREATE_PROJECT = 'CREATE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const SELECT_PROJECT = 'SELECT_PROJECT';
export const ADD_NEW_DRAWING = 'ADD_NEW_DRAWING';
export const DELETE_DRAWING = 'DELETE_DRAWING';
export const UPDATE_DRAWING = 'UPDATE_DRAWING';
export const CREATE_DEFECT = 'CREATE_DEFECT';

export class CreateProject implements Action {
  readonly type = CREATE_PROJECT;

  constructor(public payload: any) {
  }
}

export class UpdateProject implements Action {
  readonly type = UPDATE_PROJECT;

  constructor(public payload: any) {
  }
}

export class AddNewDrawing implements Action {
  readonly type = ADD_NEW_DRAWING;

  constructor(public payload: any) {
  }
}

export class DeleteDrawing implements Action {
  readonly type = DELETE_DRAWING;

  constructor(public payload: any) {
  }
}

export class UpdateDrawing implements Action {
  readonly type = UPDATE_DRAWING;

  constructor() {
  }
}

export class SelectProject implements Action {
  readonly type = SELECT_PROJECT;

  constructor(public payload: any) {
  }
}

export class CreateDefect implements Action {
  readonly type = CREATE_DEFECT;

  constructor(public payload: any) {
  }
}

export type Actions
  = CreateProject
  | UpdateProject
  | SelectProject
  | AddNewDrawing
  | DeleteDrawing
  | UpdateDrawing
  | CreateDefect;

