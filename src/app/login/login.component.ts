import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppStore} from "../store/app.store";
import * as LoginActions from "../actions/login.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  logged = new Observable<any>();

  constructor(private store: Store<AppStore>) {
    this.logged = store.select('login');
  }

  login(username: string, password: string) {
    this.store.dispatch(new LoginActions.AttemptLogin({username, password}));
  }

}
