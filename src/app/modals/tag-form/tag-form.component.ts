import {Component, Input, OnInit} from '@angular/core';
import {TagForm} from './tag-form';
import {TagInterface} from '../../interfaces/tag.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TagsService} from '../../store/tags/tags.service';
import {NotificationService} from '../../modules/notification/notification.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  formModel = new TagForm();
  @Input()
  tag: TagInterface = {
    name: '',
    color: ''
  }

  constructor(private readonly activeModal: NgbActiveModal, private readonly tagsService: TagsService, private readonly notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.formModel.setupTag(this.tag);
  }

  showRemoveTag() {
    return this.tagExists();
  }

  closeModal() {
    this.activeModal.close();
  }

  async removeTag() {
    const confirm = await this.notificationService.alert('Confirm', 'Are you sure you want to remove this tag?');
    if (confirm) {
      this.tagsService.removeTag(this.tag);
      this.closeModal();
    }
  }

  submit() {
    if (this.formModel.invalid) {
      return;
    }

    const tag: TagInterface = this.formModel.value;
    tag.id = this.tag.id;
    if (this.tagExists()) {
      this.tagsService.updateTag(tag);
    } else {
      this.tagsService.addTag(tag);
    }

    this.closeModal();
  }

  private tagExists() {
    return this.tag && this.tag.id != null;
  }
}
