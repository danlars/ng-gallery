import Dexie, {Table} from 'dexie';
import {ImageInterface} from '../../interfaces/image.interface';
import {TagInterface} from '../../interfaces/tag.interface';
import {UserInterface} from '../../interfaces/user.interface';

export class GallerySchema extends Dexie {
  public images: Table<ImageInterface, number>;
  public tags: Table<TagInterface, number>;
  public users: Table<UserInterface, number>;

  constructor() {
    super('GallerySchema');
    this.version(3).stores({
      images: '++id, title, description, image',
      tags: '++id, name',
      users: '++id, name, username, avatar',
    });

    this.images = this.table("images");
    this.tags = this.table("tags");
    this.users = this.table("users");
  }
}
