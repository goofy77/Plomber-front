export class RegistrationUser {

  firstName: string;
  lastName: string;
  password: string;
  email: string;
  companyName: string;

  constructor(firstName: string, lastName: string, password: string, emial: string, companyName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = emial;
    this.companyName = companyName;
  }
}
