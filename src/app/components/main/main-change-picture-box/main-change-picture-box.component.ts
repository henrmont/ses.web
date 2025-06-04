import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from '../../../services/main.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImageCroppedEvent, ImageCropperComponent, LoadedImage } from 'ngx-image-cropper';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-change-picture-box',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, ImageCropperComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './main-change-picture-box.component.html',
  styleUrl: './main-change-picture-box.component.scss'
})
export class MainChangePictureBoxComponent {

  private snackBar = inject(MatSnackBar);
  data = inject(MAT_DIALOG_DATA)

  changePictureForm: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    picture: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private dialog: MatDialog,
  ) {}

  imageChangedEvent: any = this.data.event;
  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64
    this.changePictureForm.patchValue({
      picture: this.croppedImage
    })
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  onChangePictureSubmit(): any {
    this.mainService.changePicture(this.changePictureForm.value).subscribe({
      next: (response) => {
        this.snackBar.open(response.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (error) => {
        this.snackBar.open(error.error.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }



}
