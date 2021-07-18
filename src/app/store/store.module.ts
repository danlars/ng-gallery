import { NgModule } from '@angular/core';
import {ImagesModule} from './images/images.module';
import {StoreModule} from '@ngrx/store';
import {TagsModule} from './tags/tags.module';
import {UsersModule} from './users/users.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    ImagesModule,
    TagsModule,
    UsersModule
  ]
})
export class AppStoreModule { }
