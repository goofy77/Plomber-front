import {Popup} from "ng2-opd-popup";
import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Drawing} from "../project/drawing/drawing";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {CreateDefectCommand} from "./create-defect-command";
import {Modal} from "ngx-modialog/plugins/bootstrap";
import {CreateDefect} from "../actions/project.actions";
import {DefectCreatorService} from "./defect-creator.service";

@Component({
  selector: 'defect-creator',
  templateUrl: './defect-creator.component.html',
  styleUrls: ['./defect-creator.component.css']
})
export class DefectCreatorComponent implements OnInit {

  defectForm: FormGroup;
  @Input() private drawing: Drawing;
  @Input() private coordinates: Coordinates;
  @ViewChild('fileInput') inputEl: ElementRef;


  constructor(private formBuilder: FormBuilder, public modal: Modal, private popup: Popup, private store: Store<AppStore>, private defectCreatorService: DefectCreatorService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.defectForm = this.formBuilder.group({
      description: '',
      defectType: ''
    })
  }

  createDefect() {
    // const dialogRef = this.modal.alert()
    //   .size('lg')
    //   .showClose(true)
    //   .title('A simple Alert style modal window')
    //   .body(`<defect-creator></defect-creator>`)
    //   .open();
    this.popup.show();
  }

  submit() {
    const command = new CreateDefectCommand(
      this.defectForm.value.description,
      this.inputEl.nativeElement.files.item(0),
      this.defectForm.value.defectType,
      this.coordinates,
      this.drawing.drawingId);
    this.store.dispatch(new CreateDefect(command));
  }


}
