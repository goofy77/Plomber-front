import * as LoginActions from "../actions/login.actions";
import {Actions} from "../actions/login.actions";

export interface ILogin {
  loginState: boolean
}

const initState: ILogin = {
  loginState: false
};

export const login = (state = initState, action: Actions) => {
  switch (action.type) {
    case LoginActions.ATTEMPT_LOGIN:
      return {...state, loginState: action.payload};
    case LoginActions.LOGIN_SUCCESS:
      return {...state, loginState: action.payload};
    case LoginActions.LOGIN_FAILED:
      return {...state, loginState: action.payload};
    default:
      return state;
  }
};

export const loginSelector = state => state.loginState;
