import {Action} from "@ngrx/store";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export class RegisterUser implements Action {
  readonly type = REGISTER_USER;

  constructor(public payload: any) {
  }
}

export class RegistrationSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class RegistrationFailed implements Action {
  readonly type = REGISTER_FAILED;

  constructor(public payload: any) {
  }
}

export type Actions
  = RegisterUser | RegistrationFailed | RegistrationSuccess;
