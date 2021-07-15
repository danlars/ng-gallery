import {Component, Input, OnInit} from '@angular/core';
import {ImageInterface} from '../../interfaces/image.interface';
import {ImagesService} from '../../store/images/images.service';
import {ImageForm} from './image-form';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {fileToBase64} from '../../functions/file-to-base64';
import {NotificationService} from '../../modules/notification/notification.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  imageUploaded: string = '';
  formModel = new ImageForm();

  @Input()
  image: ImageInterface | null = null;

  constructor(private readonly imagesService: ImagesService, private readonly activeModal: NgbActiveModal, private readonly notificationService: NotificationService) {
  }

  ngOnInit(): void {
    if (this.imageExists() && this.image) {
      this.formModel.disableImage();
      this.imageUploaded = this.image.image;
      this.formModel.updateFormControlValue(this.image);
    }
  }

  imageExists(): boolean {
    return !!(this.image && this.image?.id);
  }

  async onImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      const base64Image = await fileToBase64(file);
      this.imageUploaded = base64Image;
      this.formModel.patchValue({
        imageSource: base64Image
      });
    }
  }

  async removeImage() {
    if (!this.imageExists() || !this.image) {
      return;
    }

    const confirm = await this.notificationService.alert('Confirm', 'Are you sure you want to Remove this image?');
    if (confirm) {
      this.imagesService.removeImage(this.image);
      this.closeModal();
    }
  }

  submit() {
    if (this.formModel.invalid) {
      return;
    }

    const newImage = {
      ...this.formModel.getFormValues(),
      id: this.image?.id,
      image: this.imageUploaded
    };

    if (this.imageExists()) {
      this.imagesService.editImage(newImage);
    } else {
      this.imagesService.addImage(newImage);
    }
    this.closeModal();
  }

  private closeModal() {
    this.activeModal.close();
  }
}
