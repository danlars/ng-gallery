import {createAction, props} from '@ngrx/store';
import {ImageInterface} from '../../interfaces/image.interface';

export const addImage = createAction('[Images] Add image to image collection', props<{image: ImageInterface}>());
export const removeImage = createAction('[Images] Remove image from image collection', props<{image: ImageInterface}>());
export const editImage = createAction('[Images] Edit image from image collection', props<{image: ImageInterface}>());
export const setImages = createAction('[Images] Set collection', props<{images: ImageInterface[]}>());
export const selectImage = createAction('[Images] Selected Image', props<{image: ImageInterface | null}>());
export const onSelectNextImage = createAction('[Images] Select next image in image collection');
export const onSelectPreviousImage = createAction('[Images] Select previous image in image collection');
