import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserFormComponent} from './user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AvatarModule} from '../../components/avatar/avatar.module';
import {NotificationModule} from '../../modules/notification/notification.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NotificationModule
  ],
  exports: [
    UserFormComponent,
  ]
})
export class UserFormModule { }
