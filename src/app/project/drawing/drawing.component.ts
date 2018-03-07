import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Drawing} from "./drawing";
import {Global} from "../../../global";
import {Store} from "@ngrx/store";
import {AppStore, getCurrentDrawing} from "../../store/app.store";
import { Location } from '@angular/common';
import {UpdateDrawing} from "../../actions/project.actions";
import {Coordinates} from "../../models/coordintes";
import {DefectCreatorComponent} from "../../defect-creator/defect-creator.component";
import {connectRouterActions} from "@ngrx/router-store/src/connect";

@Component({
  selector: 'drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})

export class DrawingComponent implements OnInit {

  private drawing;
  private url;
  private rotation;
  private zoom = 1.0;
  private currentCoordinates;
  components: Coordinates[] = [];
  @ViewChild(DefectCreatorComponent) defectCreator;

  constructor(private store: Store<AppStore>, private location : Location) {
    this.drawing = this.store.select(getCurrentDrawing)
  }

  ngOnInit(): void {
    this.zoom = 1.0;
  }

  goBack(){
    this.location.back();
  }

  ngOnChanges(){
    console.log(this.drawing.defects)
    this.components = [];
    // if(this.zoom !== 1.0){
      this.drawing.defects.forEach((defect) => {this.components.push(new Coordinates(defect.coordinates.x*this.zoom, defect.coordinates.y*this.zoom))})

    // }
  }

  getCoordinates(event) {
    const rect = document.getElementById("drawing").getBoundingClientRect();
    const x = event.pageX - rect.left;
    const y = event.pageY - rect.top;
    const coordinates = new Coordinates(x, y);
    this.components.push(coordinates);
    this.currentCoordinates = coordinates;
    this.defectCreator.createDefect();
  }

  zoomIn(): void {
    this.zoom = this.zoom + 0.5;
  }

  zoomOut(): void {
    this.zoom = this.zoom - 0.5;
  }

  rotateView(): void {
    const rect = document.getElementById("drawing").getBoundingClientRect();

    this.components = [];
    this.drawing.rotation += 90;
    const sin = Math.round(Math.sin(90*Math.PI/180));
    const cos = Math.round(Math.cos(90*Math.PI/180));
    this.drawing.defects.forEach((defect) => {this.components.push(new Coordinates(
      (defect.coordinates.x*cos - defect.coordinates.y*sin),
      (defect.coordinates.x*sin+defect.coordinates.y*cos)
    ))});
    console.log(this.drawing.rotation)
    console.log(Math.round(Math.cos(this.drawing.rotation*Math.PI/180)))
    console.log(Math.round(Math.sin(this.drawing.rotation*Math.PI/180)))
  }

  getZoom(): number {
    return this.zoom;
  }

  getUrl()  {
    this.drawing.subscribe(data => this.url = data.drawingUrl );
    console.log(this.url)
    return Global.API_URL + '/image/' + this.url;
  }

  getRotation(): number {
    return this.drawing.rotation;
  }

  updateDrawing() {
    this.store.dispatch(new UpdateDrawing())
  }

}
