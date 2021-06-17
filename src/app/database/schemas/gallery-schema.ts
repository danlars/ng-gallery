import Dexie, {Table} from 'dexie';
import {ImageInterface} from '../../interfaces/image.interface';
import {TagInterface} from '../../interfaces/tag.interface';

export class GallerySchema extends Dexie {
  public images: Table<ImageInterface, number>;
  public tags: Table<TagInterface, number>;

  constructor() {
    super('GallerySchema');
    this.version(2).stores({
      images: '++id, title, description, image',
      tags: '++id, name',
    });

    this.images = this.table("images");
    this.tags = this.table("tags");
  }
}
