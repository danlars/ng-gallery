import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view.component';
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { ImageSelectedComponent } from './image-selected/image-selected.component';

@NgModule({
  declarations: [
    ImageViewComponent,
    ImageThumbnailComponent,
    ImageSelectedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageViewModule { }
