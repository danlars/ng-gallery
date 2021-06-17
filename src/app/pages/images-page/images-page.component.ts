import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../store/images/images.service';
import {Observable} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss']
})
export class ImagesPageComponent implements OnInit {
  images$: Observable<ImageInterface[]>;

  constructor(private readonly imagesService: ImagesService, private readonly formService: FormService) {
    this.images$ = this.imagesService.images$;
  }

  ngOnInit(): void {
    this.imagesService.getAllImages();
  }

  openForm(image: ImageInterface | null = null) {
    this.formService.openImageForm({image});
  }
}
