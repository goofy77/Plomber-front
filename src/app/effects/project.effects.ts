import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as ProjectActions from "../actions/project.actions";
import {SelectProject} from "../actions/project.actions";
import {ProjectService} from "../project/project.service";
import {of} from "rxjs/observable/of";
import {AppStore, getProject} from "../store/app.store";
import {Store} from "@ngrx/store";
import {AddDrawingCommand} from "../project/add-drawing/add-drawing.command";
import {Project} from "../project/project";
import {UploadService} from "../upload/upload.service";
import {Drawing} from "../project/drawing/drawing";
import {DefectCreatorService} from "../defect-creator/defect-creator.service";
import {CreateDefectCommand} from "../defect-creator/create-defect-command";
import {go} from "@ngrx/router-store";

@Injectable()
export class ProjectEffects {

  constructor(private actions: Actions,
              private projectService: ProjectService,
              private defectCreatorService: DefectCreatorService,
              private uploadService: UploadService,
              private store: Store<AppStore>) {
  }

  @Effect() createDefect = this.actions
    .ofType(ProjectActions.CREATE_DEFECT)
    .map(toPayload)
    .withLatestFrom(this.store.select(getProject))
    .switchMap(([payload, project]: [CreateDefectCommand, Project]) =>
        this.defectCreatorService.createDefect(payload, project.projectId).map(response => console.log(response))
      .catch(error => of(console.log('dupa zimna')))
    );

  @Effect() createProject = this.actions
    .ofType(ProjectActions.CREATE_PROJECT)
    .map(toPayload)
    .switchMap(payload => this.projectService.save(payload)
      .catch(error => of(console.log('dupa zimna')))
    );

  @Effect() addNewDrawing = this.actions
    .ofType(ProjectActions.ADD_NEW_DRAWING)
    .map(toPayload)
    .withLatestFrom(this.store.select(getProject))
    .switchMap(([payload, project]: [AddDrawingCommand, Project]) =>
      this.uploadService.upload(payload.file)
        .map(response => {
          project.drawings.push(new Drawing(payload.drawingName.trim(), response.drawingUrl, 0, []));
          return new ProjectActions.UpdateProject(project);
        })
    );

  @Effect() updateDrawing = this.actions
    .ofType(ProjectActions.UPDATE_DRAWING)
    .map(toPayload)
    .withLatestFrom(this.store.select(getProject))
    .map(([payload, project]: [any, Project]) => new ProjectActions.UpdateProject(project));

  @Effect() deleteDrawing = this.actions
    .ofType(ProjectActions.DELETE_DRAWING)
    .map(toPayload)
    .withLatestFrom(this.store.select(getProject))
    .map(([payload, project]: [Drawing, Project]) => {
      const projectFiltered = project.drawings.filter(drawing => drawing.drawingId !== payload.drawingId);
      Object.assign(project, {drawings: projectFiltered});
        return new ProjectActions.UpdateProject(project);
      }
    );

  @Effect() updateProject = this.actions
    .ofType(ProjectActions.UPDATE_PROJECT)
    .map(toPayload)
    .switchMap(payload =>
      this.projectService.updateProject(payload)
        .map(result => new SelectProject(result))
        .catch(error => of(console.log('dupa zimna')))
    );
}
