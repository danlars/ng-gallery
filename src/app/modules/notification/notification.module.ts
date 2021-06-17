import { NgModule } from '@angular/core';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from './notification.service';
import { NotificationComponent } from './notification.component';

@NgModule({
  providers: [NotificationService],
  imports: [
    NgbModalModule
  ],
  declarations: [
    NotificationComponent
  ],
})
export class NotificationModule { }
