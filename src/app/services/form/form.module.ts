import { NgModule } from '@angular/core';
import {FormService} from './form.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageFormModule} from '../../modals/image-form/image-form.module';
import {TagFormModule} from '../../modals/tag-form/tag-form.module';

@NgModule({
  providers: [FormService],
  imports: [
    NgbModalModule,
    ImageFormModule,
    TagFormModule
  ]
})
export class FormModule { }
