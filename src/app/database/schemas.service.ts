import { Injectable } from '@angular/core';
import {GallerySchema} from './schemas/gallery-schema';

@Injectable()
export class SchemasService {
  gallerySchema = new GallerySchema();
}
