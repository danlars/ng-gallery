import {Component, HostListener, OnDestroy} from '@angular/core';
import {ImagesService} from '../../store/images/images.service';
import {Observable, Subscription} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
})
export class ImageViewComponent implements OnDestroy {
  private imageSelectedSubscription: Subscription;
  images$: Observable<ImageInterface[]>;
  selectedImage: ImageInterface | null = null;

  @HostListener('window:keydown', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft': this.imagesService.goToPreviousImage(); break;
      case 'ArrowRight': this.imagesService.goToNextImage(); break;
    }
  }

  constructor(private readonly imagesService: ImagesService, private readonly activeModal: NgbActiveModal) {
    this.images$ = this.imagesService.images$;
    this.imageSelectedSubscription = this.imagesService.imageSelected$.subscribe((image) => {
      this.selectedImage = image;
    });
  }

  selectImage(image: ImageInterface) {
    this.imagesService.setSelectedImage(image);
  }

  isSelectedImage(image: ImageInterface) {
    if (this.selectedImage === null) {
      return false;
    }
    return this.selectedImage.id === image.id;
  }

  ngOnDestroy() {
    this.imagesService.setSelectedImage(null);
    this.imageSelectedSubscription.unsubscribe();
  }

  close(event: Event) {
    event.preventDefault();
    setTimeout(() => this.activeModal.close(), 80);
  }
}
