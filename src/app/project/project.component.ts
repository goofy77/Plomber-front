import {Component, Input, OnInit} from "@angular/core";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {DeleteDrawing} from "../actions/project.actions";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.html']
})

export class ProjectComponent implements OnInit {

  @Input() private project;

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit(): void {
  }

  deleteDrawingAction(drawing) {
    this.store.dispatch(new DeleteDrawing(drawing))
  }

}
