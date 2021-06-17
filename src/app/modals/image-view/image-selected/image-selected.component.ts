import {Component, Input} from '@angular/core';
import {ImageInterface} from '../../../interfaces/image.interface';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})
export class ImageSelectedComponent {
  @Input()
  image: ImageInterface | null = null;
}
