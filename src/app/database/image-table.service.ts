import { Injectable } from '@angular/core';
import {GallerySchema} from './schemas/gallery-schema';
import {ImageInterface} from '../interfaces/image.interface';
import {SchemasService} from './schemas.service';

@Injectable()
export class ImageTableService {
  private gallerySchema: GallerySchema;
  constructor(schemaService: SchemasService) {
    this.gallerySchema = schemaService.gallerySchema;
  }

  async addImage(image: ImageInterface): Promise<ImageInterface> {
    const imageKey = await this.gallerySchema.images.put(image);
    return this.gallerySchema.images.get(imageKey) as Promise<ImageInterface>;
  }

  removeImage(image: ImageInterface) {
    return this.gallerySchema.images.delete(image.id as number);
  }

  updateImage(image: ImageInterface) {
    return this.gallerySchema.images.update(image.id as number, image);
  }

  getAllImages() {
    return this.gallerySchema.images.toArray();
  }
}
