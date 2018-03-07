import * as UserActions from "../actions/user.actions";
import {Actions} from "../actions/user.actions";

export interface IRegister {
  registrationStatus: boolean
}

export const initialState: IRegister = {
  registrationStatus: false
};

export const registration = (state = initialState, action: Actions) => {
  switch (action.type) {
    case UserActions.REGISTER_USER:
      return {...state, registrationStatus: action.payload};
    case UserActions.REGISTER_SUCCESS:
      return {...state, registrationStatus: action.payload};
    case UserActions.REGISTER_FAILED:
      return {...state, registrationStatus: action.payload};
    default:
      return state;
  }
};

export const getRegistrationState = state => state.registrationStatus;
