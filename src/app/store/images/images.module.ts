import { NgModule } from '@angular/core';
import {ImagesService} from './images.service';
import {StoreModule} from '@ngrx/store';
import {imagesStateKey} from './images-state.key';
import {imagesReducer} from './images.reducers';
import {DatabaseModule} from '../../database/database.module';

@NgModule({
  imports: [
    StoreModule.forFeature(imagesStateKey, imagesReducer),
    DatabaseModule,
  ],
  providers: [ImagesService]
})
export class ImagesModule { }
