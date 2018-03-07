import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppStore} from "../../store/app.store";
import {AddNewDrawing} from "app/actions/project.actions";
import {AddDrawingCommand} from "./add-drawing.command";
import {DrawingUploadComponent} from "../../upload/upload.component";

@Component({
  selector: 'app-add-drawing',
  templateUrl: './add-drawing.component.html',
  styleUrls: ['./add-drawing.component.css']
})
export class AddDrawingComponent implements OnInit {

  @ViewChild(DrawingUploadComponent) uploader: DrawingUploadComponent;
  addDrawingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppStore>) {
  }

  createForm() {
    this.addDrawingForm = this.formBuilder.group({
      drawingName: '',
    })
  }

  ngOnInit() {
    this.createForm();
  }

  addNewDrawing() {
    const data = this.addDrawingForm.value;
    this.store.dispatch(new AddNewDrawing(new AddDrawingCommand(data.drawingName, this.uploader.createFile())))
  }

}
