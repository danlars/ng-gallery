import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagsPageRoutingModule} from './tags-page-routing.module';
import {TagsPageComponent} from './tags-page.component';

@NgModule({
  declarations: [TagsPageComponent],
  imports: [
    CommonModule,
    TagsPageRoutingModule
  ]
})
export class TagsPageModule { }
