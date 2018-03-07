import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import * as LoginActions from "../actions/login.actions";
import {Global} from "../../global";
import {go} from "@ngrx/router-store";
import {LoginService} from "../login/login.service";
import {of} from "rxjs/observable/of";


@Injectable()
export class LoginEffects {

  constructor(private actions: Actions,
              private loginService: LoginService) {
  }

  @Effect() login = this.actions
    .ofType(LoginActions.ATTEMPT_LOGIN)
    .map(toPayload)
    .switchMap(payload => this.loginService.attemptLogin(payload)
      .map(response => new LoginActions.LoginSuccess(response))
      .catch(error => of(new LoginActions.LoginFailed(error)))
    );

  @Effect() success = this.actions
    .ofType(LoginActions.LOGIN_SUCCESS)
    .map(toPayload)
    .map(payload => localStorage.setItem(Global.TOKEN, payload))
    .map(() => go(['/menu']));

  @Effect() error = this.actions
    .ofType(LoginActions.LOGIN_FAILED)
    .map(toPayload)
    .map(payload => console.log(payload))
    .ignoreElements();
}

