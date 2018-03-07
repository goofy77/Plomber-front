import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Drawing} from "../drawing";
import {AppStore, getCurrentDrawing} from "../../../store/app.store";
import {Store} from "@ngrx/store";
import {SelectDrawing} from "app/actions/drawing.actions";

@Component({
  selector: 'drawing-list',
  templateUrl: './drawing-list.component.html',
  styleUrls: ['./drawing-list.component.css']
})
export class DrawingListComponent implements OnInit {

  @Input() private drawingList;
  @Output() private deleteDrawingAction = new EventEmitter<Drawing>();

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
  }

  selectDrawing(drawing) {
    this.store.dispatch(new SelectDrawing(drawing));
  }

  deleteDrawing(drawing) {
    this.deleteDrawingAction.emit(drawing);
  }

}
