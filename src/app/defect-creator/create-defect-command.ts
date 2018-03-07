import {DefectType} from "../defect/defect-type";
import {Drawing} from "../project/drawing/drawing";
export class CreateDefectCommand{
  description: string;
  file: any;
  defectType: DefectType;
  coordinates: Coordinates;
  drawingId: string;

  constructor(description: string, file: any, defectType: DefectType, coordinates: Coordinates, drawingId: string) {
    this.description = description;
    this.file = file;
    this.defectType = defectType;
    this.coordinates = coordinates;
    this.drawingId = drawingId;
  }
}
