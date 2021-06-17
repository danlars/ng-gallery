import {Component, OnDestroy} from '@angular/core';
import {ImagesService} from '../../store/images/images.service';
import {Observable} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
})
export class ImageViewComponent implements OnDestroy {
  images$: Observable<ImageInterface[]>;
  selectedImage: ImageInterface | null = null;

  constructor(private readonly imagesService: ImagesService, private readonly activeModal: NgbActiveModal) {
    this.images$ = this.imagesService.images$;
    this.imagesService.imageSelected$.subscribe((image) => {
      this.selectedImage = image;
    })
  }

  ngOnDestroy() {
    this.imagesService.setSelectedImage(null);
  }

  close() {
    this.activeModal.close();
  }
}
