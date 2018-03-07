import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Coordinates} from "../models/coordintes";
@Component({
  selector: 'defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponentComponent implements OnInit {

  @Input() info: Coordinates;
  @Input() flag: any;
  private offset;

  @HostBinding('style.left.px')
  get left() {
    return this.info.x+this.offset.left;
  }

  @HostBinding('style.top.px')
  get top() {
    return this.info.y+this.offset.top;
  }

  constructor() {
  }

  ngOnInit() {
    this.offset = document.getElementById("drawing").getBoundingClientRect();
    console.log(this.info)
    console.log(this.offset)
  }

}
