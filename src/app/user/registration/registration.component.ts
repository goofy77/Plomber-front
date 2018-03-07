import {Component} from "@angular/core";
import {RegistrationUser} from "./registration.user";
import {Observable, Subject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppStore, getEmailExists} from "../../store/app.store";
import * as EmailActions from "../../actions/email.actions";
import * as UserActions from "../../actions/user.actions";

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  emailExists = new Observable<any>();
  private emailToSearch = new Subject<string>();
  userForm: FormGroup;

  ngOnInit(): void {
    this.emailToSearch
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(email => this.store.dispatch(new EmailActions.CheckEmail(email)));
  }

  constructor(private store: Store<AppStore>,
              private formBuilder: FormBuilder) {
    this.createForm();
    this.emailExists = store.select(getEmailExists);
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      password: ''
    })
  }

  register(): void {
    const data = this.userForm.value;
    const user = new RegistrationUser(
      data.firstName as string,
      data.lastName as string,
      data.password as string,
      data.email as string,
      data.companyName as string
    );
    this.store.dispatch(new UserActions.RegisterUser(user))
  }

  checkIfExists(email: string) {
    this.emailToSearch.next(email.trim());
  }


}
