import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {RegistrationService} from "../user/registration/registration.service";
import * as UserActions from "../actions/user.actions";
import {of} from "rxjs/observable/of";
import {go} from "@ngrx/router-store";

@Injectable()
export class UserEffects {

  constructor(private actions: Actions,
              private registrationService: RegistrationService) {
  }

  @Effect() registerUser = this.actions
    .ofType(UserActions.REGISTER_USER)
    .map(toPayload)
    .switchMap(payload => this.registrationService.register(payload)
      .map(response => new UserActions.RegistrationSuccess(response))
      .catch(error => of(new UserActions.RegistrationFailed(error)))
    );

  @Effect() registrationSuccess = this.actions
    .ofType(UserActions.REGISTER_SUCCESS)
    .map(() => go(['/login']));

  @Effect() registrationFailure = this.actions
    .ofType(UserActions.REGISTER_FAILED)
    .map(toPayload)
    .map(payload => console.log(payload))
    .ignoreElements();

}
