import {Component, Input} from '@angular/core';
import {ImageInterface} from '../../../interfaces/image.interface';
import {ImagesService} from '../../../store/images/images.service';
import {v4} from 'uuid';

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

  constructor(private readonly imagesService: ImagesService) {
    this.uuid = v4();
  }

  selectImage(event: MouseEvent) {
    event.preventDefault();
    this.imagesService.setSelectedImage(this.image);
  }

}
