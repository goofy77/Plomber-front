import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {RegistrationService} from "../user/registration/registration.service";
import * as EmailActions from "../actions/email.actions";

@Injectable()
export class EmailEffects {

  constructor(private actions: Actions,
              private registrationService: RegistrationService) {
  }

  @Effect() checkEmail = this.actions
    .ofType(EmailActions.CHECK_EMAIL)
    .map(toPayload)
    .switchMap(payload => this.registrationService.exists(payload)
      .map(response => new EmailActions.EmailExists(response))
    );
}
