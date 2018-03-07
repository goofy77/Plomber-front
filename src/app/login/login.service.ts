import {Injectable} from "@angular/core";
import {Global} from "../../global";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppStore} from "../store/app.store";

@Injectable()
export class LoginService {

  auth = new Observable<any>();

  constructor(private store: Store<AppStore>, private http: Http) {
    this.auth = store.select('auth');
  }

  attemptLogin(payload): Observable<any> {
    return this.http.post(Global.API_URL + '/login', payload)
      .map(response => response.headers.get('Authorization'));
  }
}
