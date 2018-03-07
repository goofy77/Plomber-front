import {ProjectService} from "app/project/project.service";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as ProjectListActions from "../actions/project-state.actions";
import * as ProjectActions from "../actions/project.actions";
import {of} from "rxjs/observable/of";
import {Store} from "@ngrx/store";
import {AppStore} from "../store/app.store";
import {SelectProject} from "../actions/project.actions";

@Injectable()
export class ProjectStateEffects {

  constructor(private actions: Actions,
              private projectService: ProjectService, private store: Store<AppStore>) {
  }

  @Effect() getProjects = this.actions
    .ofType(ProjectListActions.GET_PROJECTS)
    .switchMap(() => this.projectService.getProjects()
      .mergeMap(response =>
        [ new ProjectListActions.AddProjects(response),
          new SelectProject(response[0])
        ])
      .catch(error => of(console.log(error)))
    );

  @Effect() deleteProject = this.actions
    .ofType(ProjectListActions.DELETE_PROJECT)
    .switchMap(action => this.projectService.deleteProject(action.payload)
      .catch(() => of(new ProjectListActions.GetProjects()))
    );

}
