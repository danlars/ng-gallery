import {createReducer, on} from '@ngrx/store';
import {addImage, editImage, removeImage, selectImage, setImages, onSelectNextImage, onSelectPreviousImage} from './images.actions';
import {ImagesStateInterface} from './images.state.interface';

const ImagesState: ImagesStateInterface = {
  images: [],
  selectedImage: null,
  selectedImageIndex: 0
};

export const imagesReducer = createReducer(
  ImagesState,
  on(addImage, (state, { image }) => {
    const images = [...state.images];
    const addedImage = {...image};
    images.push(addedImage);
    return {
      ...state,
      images
    };
  }),
  on(removeImage, (state, { image }) => {
    const images = [...state.images];
    const imageIndex = images.findIndex(imageState => imageState.id === image.id);
    images.splice(imageIndex, 1);
    return {
      ...state,
      images
    };
  }),
  on(editImage, (state, { image }) => {
    const images = [...state.images];
    const imageIndex = images.findIndex(imageState => imageState.id === image.id);
    images.splice(imageIndex, 1, image);
    return {
      ...state,
      images
    };
  }),
  on(setImages, (state, { images }) => ({...state, images})),
  on(selectImage, (state, { image }) => {
    return {
      ...state,
      selectedImage: image,
      selectedImageIndex: state.images.findIndex(storeImage => storeImage.id === image?.id),
    };
  }),
  on(onSelectNextImage, (state) => {
    let index = state.selectedImageIndex + 1;
    if (state.images.length === index) {
      index = 0;
    }

    return {
      ...state,
      selectedImage: state.images[index],
      selectedImageIndex: index,
    };
  }),
  on(onSelectPreviousImage, (state) => {
    let index = state.selectedImageIndex - 1;
    if (index === -1) {
      index = state.images.length - 1;
    }

    return {
      ...state,
      selectedImage: state.images[index],
      selectedImageIndex: index,
    };
  }),
);
