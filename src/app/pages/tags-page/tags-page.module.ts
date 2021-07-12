import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagsPageRoutingModule} from './tags-page-routing.module';
import {TagsPageComponent} from './tags-page.component';
import {FormModule} from '../../services/form/form.module';
import {TagModule} from '../../components/tag/tag.module';

@NgModule({
  declarations: [TagsPageComponent],
  imports: [
    CommonModule,
    TagsPageRoutingModule,
    FormModule,
    TagModule
  ]
})
export class TagsPageModule { }
