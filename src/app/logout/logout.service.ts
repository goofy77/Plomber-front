import {Injectable} from "@angular/core";
import {Global} from "../../global";
import {Router} from "@angular/router";

@Injectable()
export class LogoutService {

  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.removeItem(Global.TOKEN)
    this.router.navigate(['/']);
  }

}
