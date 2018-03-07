import {ProjectService} from "app/project/project.service";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as ProjectListActions from "../actions/project-list.actions";
import {of} from "rxjs/observable/of";

@Injectable()
export class ProjectListEffects {

  constructor(private actions: Actions,
              private projectService: ProjectService,) {
  }

  @Effect() getProjects = this.actions
    .ofType(ProjectListActions.GET_PROJECTS)
    .switchMap(() => this.projectService.getProjects()
      .map(response => new ProjectListActions.AddProjects(response))
      .catch(error => of(console.log(error)))
    );

  @Effect() deleteProject = this.actions
    .ofType(ProjectListActions.DELETE_PROJECT)
    .switchMap(action => this.projectService.deleteProject(action.payload)
      .catch(() => of(new ProjectListActions.GetProjects()))
    );

}
