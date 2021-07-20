import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {selectImages} from './images.selectors';
import {addImage, editImage, removeImage, setImages} from './images.actions';
import {ImageTableService} from '../../database/image-table.service';

@Injectable()
export class ImagesService {
  images$: Observable<ImageInterface[]>;

  constructor(private readonly store: Store, private readonly imageTable: ImageTableService) {
    this.images$ = this.store.pipe(select(selectImages));
  }

  async addImage(image: ImageInterface) {
    const addedImage = await this.imageTable.addImage(image);
    this.store.dispatch(addImage({image: addedImage}));
  }

  removeImage(image: ImageInterface) {
    this.imageTable.removeImage(image);
    this.store.dispatch(removeImage({image}));
  }

  editImage(image: ImageInterface) {
    this.imageTable.updateImage(image);
    this.store.dispatch(editImage({image}));
  }

  async getAllImages() {
    const images = await this.imageTable.getAllImages();
    this.store.dispatch(setImages({images}));
  }
}
