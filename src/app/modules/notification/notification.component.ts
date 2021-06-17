import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input()
  title: string = 'This is the title';

  @Input()
  description: string = 'This is the <strong>description</strong>';

  constructor(private readonly activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.activeModal.dismiss();
  }

  accept() {
    this.activeModal.close();
  }
}
