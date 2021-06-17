import {ImageInterface} from '../../interfaces/image.interface';

export interface ImagesStateInterface {
  images: ImageInterface[];
  selectedImage: ImageInterface | null;
}
