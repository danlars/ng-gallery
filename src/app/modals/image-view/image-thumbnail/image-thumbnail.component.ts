import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageInterface} from '../../../interfaces/image.interface';
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

  @Input()
  isActive: boolean = false;

  @Output()
  onClick: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.uuid = v4();
  }

  onClickImage(event: Event) {
    event.preventDefault();
    this.onClick.emit();
  }
}
