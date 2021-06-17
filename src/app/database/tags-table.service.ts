import {Injectable} from '@angular/core';
import {SchemasService} from './schemas.service';
import {GallerySchema} from './schemas/gallery-schema';
import {TagInterface} from '../interfaces/tag.interface';

@Injectable()
export class TagsTableService {
  private gallerySchema: GallerySchema;

  constructor(schemasService: SchemasService) {
    this.gallerySchema = schemasService.gallerySchema;
  }

  async addTag(tag: TagInterface) {
    const tagKey = await this.gallerySchema.tags.put(tag);
    return this.gallerySchema.tags.get(tagKey);
  }

  getAllTags() {
    return this.gallerySchema.tags.toArray();
  }

  updateTag(tag: TagInterface) {
    return this.gallerySchema.tags.update(tag.id as number, tag);
  }

  removeTag(tag: TagInterface) {
    return this.gallerySchema.tags.delete(tag.id as number);
  }
}
