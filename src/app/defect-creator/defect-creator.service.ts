import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {CreateDefectCommand} from "./create-defect-command";
import {Global} from "../../global";
import {Observable} from "rxjs";
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class DefectCreatorService {

  constructor(private http: AuthHttp) {
  }

  createDefect(command: CreateDefectCommand, projectId: any): Observable<any> {
    let data = new FormData();
    console.log(command);
    console.log( new Blob([JSON.stringify({command})]));
    data.append("file", command.file);
    data.append('command', new Blob([JSON.stringify(command)], {type: "application/json"}));
    return this.http.post(`${Global.API_URL}/project/${projectId}/drawing/${command.drawingId}/defect`, data)
      .map(data => data.json())
  }
}
