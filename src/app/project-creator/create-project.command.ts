export class CreateProjectCommand {
  private _name: string;
  private _drawingName: string;
  private _file: FormData;

  get name(): string {
    return this._name;
  }

  get drawingName(): string {
    return this._drawingName;
  }

  get file(): FormData {
    return this._file;
  }


  constructor(data, formData) {
    this._name = data.name;
    this._drawingName = data.drawingName;
    this._file = formData;
  }
}
