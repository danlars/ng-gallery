import { Injectable } from '@angular/core';
import {ImageInterface} from '../../interfaces/image.interface';
import {Observable, Subscription} from 'rxjs';
import {ImagesService} from '../../store/images/images.service';

@Injectable()
export class ImageViewService {
  images$: Observable<ImageInterface[]>;

  private images: ImageInterface[] = [];
  private selectedImage: ImageInterface | null = null;
  private selectedImageIndex = 0;

  constructor(private readonly imagesService: ImagesService) {
    this.images$ = this.imagesService.images$;
    this.images$.subscribe((images) => {
      this.images = images;
    });
  }

  getSelectedImage() {
    return this.selectedImage;
  }

  setSelectedImage(image: ImageInterface) {
    const imagesIndex = this.images.findIndex((stateImages) => {
      return stateImages.id === image.id;
    });
    this.selectedImage = this.images[imagesIndex] || null;
    this.selectedImageIndex = imagesIndex < 0 ? 0 : imagesIndex;
  }

  goToNextImage() {
    let index = this.selectedImageIndex + 1;
    if (this.images.length === index) {
      index = 0;
    }
    this.selectedImageIndex = index;
    this.selectedImage = this.images[index];
  }

  goToPreviousImage() {
    let index = this.selectedImageIndex - 1;
    if (index === -1) {
      index = this.images.length - 1;
    }
    this.selectedImageIndex = index;
    this.selectedImage = this.images[index];
  }
}
