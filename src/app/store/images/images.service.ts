import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ImageInterface} from '../../interfaces/image.interface';
import {selectImages, selectSelectedImage} from './images.selectors';
import {addImage, editImage, removeImage, selectImage, setImages} from './images.actions';
import {ImageTableService} from '../../database/image-table.service';

@Injectable()
export class ImagesService {
  images$: Observable<ImageInterface[]>;
  imageSelected$: Observable<ImageInterface | null>;

  constructor(private readonly store: Store, private readonly imageTable: ImageTableService) {
    this.images$ = this.store.pipe(select(selectImages));
    this.imageSelected$ = this.store.pipe(select(selectSelectedImage));
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

  setSelectedImage(image: ImageInterface | null) {
    this.store.dispatch(selectImage({image}));
  }

  async getAllImages() {
    const images = await this.imageTable.getAllImages();
    this.store.dispatch(setImages({images}));
  }
}
