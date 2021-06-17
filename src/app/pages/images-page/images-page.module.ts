import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesPageRoutingModule} from './images-page-routing.module';
import {ImagesPageComponent} from './images-page.component';
import {ImageThumbnailModule} from '../../components/image-thumbnail/image-thumbnail.module';
import {FormModule} from '../../services/form/form.module';
import {DatabaseModule} from '../../database/database.module';

@NgModule({
  declarations: [ImagesPageComponent],
  imports: [
    CommonModule,
    ImagesPageRoutingModule,
    ImageThumbnailModule,
    FormModule,
    DatabaseModule,
  ]
})
export class ImagesPageModule { }
