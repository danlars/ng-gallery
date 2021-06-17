import { NgModule } from '@angular/core';
import {ImagesModule} from './images/images.module';
import {StoreModule} from '@ngrx/store';
import {TagsModule} from './tags/tags.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    ImagesModule,
    TagsModule,
  ]
})
export class AppStoreModule { }
