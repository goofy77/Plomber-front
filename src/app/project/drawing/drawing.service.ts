import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {Observable} from "rxjs";
import {Global} from "../../../global";
import {Project} from "../project";

@Injectable()
export class DrawingService {

  constructor(private http: AuthHttp) {
  }

  updateDrawing(drawing, projectId): Observable<any> {
    return this.http.put(`${Global.API_URL}/project/${projectId}/drawing`, drawing)
      .map(data => data.json() as Project);
  }

  getDrawings(projectId): Observable<any> {
    return this.http.get(`${Global.API_URL}/project/${projectId}/drawing`)
      .map(data => data.json() as Project);
  }

  deleteDrawing(projectId, drawingId): Observable<any> {
    console.log(projectId);
    console.log(drawingId);
    return this.http.delete(`${Global.API_URL}/project/${projectId}/drawing/${drawingId}`)
      .map(data => data.json() as Project);
  }
}
