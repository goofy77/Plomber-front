export class AddDrawingCommand {

  private _drawingName: string;
  private _file: FormData;

  constructor(drawingName: string, file: FormData) {
    this._drawingName = drawingName;
    this._file = file;
  }

  get drawingName(): string {
    return this._drawingName;
  }

  get file(): FormData {
    return this._file;
  }
}
