import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageThumbnailComponent} from './image-thumbnail.component';
import {FormModule} from '../../services/form/form.module';
import {NotificationModule} from '../../modules/notification/notification.module';
import {ImageViewModule} from '../../modals/image-view/image-view.module';

@NgModule({
  declarations: [ImageThumbnailComponent],
  imports: [
    CommonModule,
    FormModule,
    NotificationModule,
    ImageViewModule
  ],
  exports: [
    ImageThumbnailComponent
  ]
})
export class ImageThumbnailModule { }
