import {Action} from "@ngrx/store";
export const SELECT_DRAWING = 'SELECT_DRAWING';

export class SelectDrawing implements Action {
  readonly type = SELECT_DRAWING;

  constructor(public payload: any) {
  }
}

export type Actions = SelectDrawing;
