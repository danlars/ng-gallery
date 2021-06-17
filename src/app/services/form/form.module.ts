import { NgModule } from '@angular/core';
import {FormService} from './form.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageFormModule} from '../../modals/image-form/image-form.module';

@NgModule({
  providers: [FormService],
  imports: [
    NgbModalModule,
    ImageFormModule
  ]
})
export class FormModule { }
