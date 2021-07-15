import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ImagesStateInterface} from './images.state.interface';
import {imagesStateKey} from './images-state.key';

const featureSelector = createFeatureSelector<ImagesStateInterface>(imagesStateKey);
export const selectImages = createSelector(
  featureSelector,
  (images) => {
    return images.images;
  }
);
export const selectSelectedImage = createSelector(
  featureSelector,
  (images) => {
    return images.selectedImage;
  }
);
export const selectSelectedImageIndex = createSelector(
  featureSelector,
  (images) => {
    return images.selectedImageIndex;
  }
);
