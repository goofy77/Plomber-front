import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {Project} from "./project";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Global} from "../../global";
import {CreateProjectCommand} from "../project-creator/create-project.command";


@Injectable()
export class ProjectService {

  private allProjects = Global.API_URL + '/project/all';
  private projectUrl = Global.API_URL + '/project';

  constructor(private http: AuthHttp) {
  }

  getProjects(): Observable<any> {
    return this.http.get(this.allProjects)
      .map(data => data.json() as Project[]);
  }

  deleteProject(project): Observable<any> {
    return this.http.delete(`${this.projectUrl}/${project.projectId}`)
      .map(data => data.json());
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.get(url).map(data => data.json() as Project);
  }

  save(command: CreateProjectCommand): Observable<any> {
    return this.http.post(`${this.projectUrl}?name=${command.name}&drawingName=${command.drawingName}`, command.file)
      .map(response => response.json());
  }

  updateProject(project: Project): Observable<any> {
    return this.http.put(`${this.projectUrl}`, project)
      .map(response => response.json());
  }
}

