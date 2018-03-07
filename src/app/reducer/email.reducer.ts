import * as EmailActions from "../actions/email.actions";
import {Actions} from "../actions/email.actions";

export interface IEmailExists {
  emailExists: boolean
}

export const initialState: IEmailExists = {
  emailExists: false
};

export const emailReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case EmailActions.EMAIL_EXISTS:
      return {...state, emailExists: action.payload};
    case EmailActions.CHECK_EMAIL:
      return state;
    default:
      return state;
  }
};

export const emailExistSelector = state => state.emailExists;
