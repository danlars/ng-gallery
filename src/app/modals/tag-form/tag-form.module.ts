import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagFormComponent} from './tag-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagModule} from '../../components/tag/tag.module';
import {NotificationModule} from '../../modules/notification/notification.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TagFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    NgbModalModule,
    NotificationModule
  ],
  exports: [
    TagFormComponent
  ]
})
export class TagFormModule { }
