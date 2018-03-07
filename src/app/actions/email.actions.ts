import {Action} from "@ngrx/store";
export const CHECK_EMAIL = 'CHECK_EMAIL';
export const EMAIL_EXISTS = 'EMAIL_EXISTS';

export class CheckEmail implements Action {
  readonly type = CHECK_EMAIL;

  constructor(public payload: any) {
  }
}

export class EmailExists implements Action {
  readonly type = EMAIL_EXISTS;

  constructor(public payload: any) {
  }
}

export type Actions
  = CheckEmail | EmailExists;
