import {Action} from "@ngrx/store";


export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export class AttemptLogin implements Action {
  readonly type = ATTEMPT_LOGIN;

  constructor(public payload: any) {
    this.payload = JSON.stringify(payload);
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoginFailed implements Action {
  readonly type = LOGIN_FAILED;

  constructor(public payload: any) {
  }
}

export type Actions
  = AttemptLogin | LoginSuccess | LoginFailed;
