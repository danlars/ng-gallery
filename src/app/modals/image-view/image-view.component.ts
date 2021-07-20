import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ImagesService} from '../../store/images/images.service';
import {Observable} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageViewService} from './image-view.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
})
export class ImageViewComponent implements OnInit {
  images$: Observable<ImageInterface[]>;
  selectedImage: ImageInterface | null = null;
  @Input()
  // @ts-ignore
  image: ImageInterface;

  @HostListener('window:keydown', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft': this.goToPreviousImage(); break;
      case 'ArrowRight': this.goToNextImage(); break;
    }
  }

  constructor(
    private readonly imagesService: ImagesService,
    private readonly imageViewService: ImageViewService,
    private readonly activeModal: NgbActiveModal,
    private readonly elementRef: ElementRef,
  ) {
    this.images$ = this.imageViewService.images$;
  }

  ngOnInit() {
    this.selectImage(this.image);
  }

  selectImage(image: ImageInterface) {
    this.imageViewService.setSelectedImage(image);
    this.updateSelectedImage();
  }

  isSelectedImage(image: ImageInterface) {
    if (this.selectedImage === null) {
      return false;
    }
    return this.selectedImage.id === image.id;
  }

  goToNextImage() {
    this.imageViewService.goToNextImage();
    this.updateSelectedImage();
    this.focusActiveThumbnail();
  }

  goToPreviousImage() {
    this.imageViewService.goToPreviousImage();
    this.updateSelectedImage();
    this.focusActiveThumbnail();
  }

  close(event: Event) {
    event.preventDefault();
    setTimeout(() => this.activeModal.close(), 80);
  }

  private focusActiveThumbnail() {
    setTimeout(() => this.elementRef.nativeElement.querySelector('app-image-thumbnail > .active')?.focus());
  }

  private updateSelectedImage() {
    this.selectedImage = this.imageViewService.getSelectedImage();
  }
}
