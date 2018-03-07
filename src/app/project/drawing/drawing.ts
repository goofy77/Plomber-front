import {Defect} from "../../models/defect";
export class Drawing {

  drawingId: string;
  name: string;
  drawingUrl: string;
  rotation: number;
  defects: Defect[];


  constructor(name: string, drawingUrl: string, rotation: number, defects: Defect[]) {
    this.name = name;
    this.drawingUrl = drawingUrl;
    this.rotation = rotation;
    this.defects = defects;
  }
}
