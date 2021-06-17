import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageFormComponent} from './image-form.component';
import {ImagesModule} from '../../store/images/images.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    CommonModule,
    ImagesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ImageFormComponent
  ]
})
export class ImageFormModule { }
