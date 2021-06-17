import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationComponent} from './notification.component';

@Injectable()
export class NotificationService {

  constructor(private readonly modalService: NgbModal) {
  }

  alert(title: string, description: string) {
    const modal = this.modalService.open(NotificationComponent, {
      size: 'md',
      backdrop: true,
    });
    modal.componentInstance.title = title;
    modal.componentInstance.description = description;
    return modal.result.then(() => {
      return true;
    }, () => {
      return false;
    })
  }
}
