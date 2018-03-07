import {Injectable} from "@angular/core";
import {RegistrationUser} from "./registration.user";
import {Global} from "global";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RegistrationService {

  constructor(private http: Http) {
  }

  register(user: RegistrationUser): Observable<any> {
    return this.http.post(Global.API_URL + '/register', user)
      .map(response => response.json());
  }

  exists(email: string): Observable<boolean> {
    return this.http.get(Global.API_URL + '/register?email=' + email)
      .map(data => data.json())
  }
}
