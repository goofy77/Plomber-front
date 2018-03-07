import {Component, ElementRef, ViewChild} from "@angular/core";
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'upload-drawing',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class DrawingUploadComponent {

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor() {
  }

  createFile(): FormData {
    let formData = new FormData();
    let input = this.inputEl.nativeElement;
    formData.append('file', input.files.item(0));
    return formData;
  }
}
