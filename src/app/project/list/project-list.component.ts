import {Component, OnInit} from "@angular/core";
import {Project} from "../project";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppStore, getProject, getProjectList} from "../../store/app.store";
import {DeleteProject, GetProjects} from "../../actions/project-state.actions";
import {SelectProject} from "../../actions/project.actions";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {

  private projectList = new Observable<Project[]>();
  private project = new Observable<Project>();

  constructor(private store: Store<AppStore>) {
    this.projectList = store.select(getProjectList);
    this.project = store.select(getProject);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProjects());
  }

  deleteProject(project) {
    console.log(project);
    this.store.dispatch(new DeleteProject(project));
  }

  selectedProject(project) {
    this.store.dispatch(new SelectProject(project));
  }
}
