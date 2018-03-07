import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {Global} from "global";
import {Observable} from "rxjs";

@Injectable()
export class UploadService {

  private uploadUrl = Global.API_URL + '/upload';

  constructor(private http: AuthHttp) {
  }

  uploadOld(input) {
    let inputEl: HTMLInputElement = input.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      for (let i = 0; i < fileCount; i++) {
        formData.append('file', inputEl.files.item(i));
      }
      this.http
        .post(this.uploadUrl, formData)
        .toPromise()
        .then(() => console.log('success'))
        .catch(() => console.log('error'));
    }
  }

  upload(data: FormData): Observable<any> {
    return this.http
      .post(this.uploadUrl, data)
      .map(response => response.json());
  }
}
