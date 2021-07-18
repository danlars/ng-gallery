import { Injectable } from '@angular/core';
import {GallerySchema} from './schemas/gallery-schema';
import {SchemasService} from './schemas.service';
import {UserInterface} from '../interfaces/user.interface';

@Injectable()
export class UsersTableService {
  private gallerySchema: GallerySchema;

  constructor(schemasService: SchemasService) {
    this.gallerySchema = schemasService.gallerySchema;
  }

  async addUser(user: UserInterface): Promise<UserInterface> {
    const tagKey = await this.gallerySchema.users.put(user);
    return this.gallerySchema.users.get(tagKey) as Promise<UserInterface>;
  }

  getAllUsers() {
    return this.gallerySchema.users.toArray();
  }

  updateUser(user: UserInterface) {
    return this.gallerySchema.users.update(user.id as number, user);
  }

  removeUser(user: UserInterface) {
    return this.gallerySchema.users.delete(user.id as number);
  }
}
