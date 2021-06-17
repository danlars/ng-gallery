import {Component, Input} from '@angular/core';
import {ImageInterface} from '../../interfaces/image.interface';
import {v4} from 'uuid';
import {FormService} from '../../services/form/form.service';
import {ImagesService} from '../../store/images/images.service';
import {NotificationService} from '../../modules/notification/notification.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageViewComponent} from '../../modals/image-view/image-view.component';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.scss']
})
export class ImageThumbnailComponent {
  uuid: string;

  @Input()
    // @ts-ignore
  image: ImageInterface;

  constructor(
    private readonly formService: FormService,
    private readonly notificationService: NotificationService,
    private readonly imagesService: ImagesService,
    private readonly modalService: NgbModal
  ) {
    this.uuid = v4();
  }

  openForm(event: MouseEvent) {
    event.stopPropagation();
    const props = {
      image: this.image
    };
    this.formService.openImageForm(props);
  }

  openGalleryWithKeyboard(event: KeyboardEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (event.key === 'Enter') {
      this.openGalleryView(event);
    }
  }

  openGalleryView(event: Event) {
    this.imagesService.setSelectedImage(this.image);
    event.preventDefault();
    event.stopPropagation();
    this.modalService.open(ImageViewComponent, {
      size: 'xl',
      modalDialogClass: 'modal-fullscreen',
    });
  }

  removeImage(event: MouseEvent) {
    event.stopPropagation();
    this.notificationService.alert('You are are about to delete your image', `You are about to delete image <strong>${this.image.title}</strong><br> Do you want to continue?`)
      .then((shouldDelete) => {
        if (shouldDelete) {
          this.imagesService.removeImage(this.image);
        }
      });

  }
}
