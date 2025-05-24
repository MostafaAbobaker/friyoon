import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();

  fileInput: HTMLInputElement;

  constructor() {
    // Create an input element dynamically to hide it
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.style.display = 'none';
    this.fileInput.addEventListener('change', (event) => this.onFileChange(event));
  }

  onButtonClick(): void {
    // Trigger the file input when the button is clicked
    this.fileInput.click();
  }

  onFileChange(event: any): void {

    const file = event.target.files[0];

    if (file) {
      this.fileSelected.emit(file); // Emit the selected file to the parent
    }
  }

}
