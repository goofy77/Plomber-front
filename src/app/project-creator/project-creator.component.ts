import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {CreateProject} from "../actions/project.actions";
import {CreateProjectCommand} from "./create-project.command";
import {DrawingUploadComponent} from "app/upload/upload.component";

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {

  projectForm: FormGroup;
  @ViewChild(DrawingUploadComponent) uploader: DrawingUploadComponent;

  constructor(private formBuilder: FormBuilder, private store: Store<AppStore>) {
  }

  createForm() {
    this.projectForm = this.formBuilder.group({
      name: '',
      drawingName: '',
    })
  }

  ngOnInit() {
    this.createForm();
  }

  createProject() {
    const data = this.projectForm.value;
    this.store.dispatch(new CreateProject(new CreateProjectCommand(data, this.uploader.createFile())))
  }
}
