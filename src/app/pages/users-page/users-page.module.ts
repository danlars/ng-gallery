import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersPageRoutingModule} from './users-page-routing.module';
import {UsersPageComponent} from './users-page.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormModule} from '../../services/form/form.module';
import {AvatarModule} from '../../components/avatar/avatar.module';
import {NotificationModule} from '../../modules/notification/notification.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    FormModule,
    NgbDropdownModule,
    AvatarModule,
    NotificationModule
  ]
})
export class UsersPageModule {
}
