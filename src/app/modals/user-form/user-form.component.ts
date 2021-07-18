import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';
import {UserForm} from './user-form';
import {fileToBase64} from '../../functions/file-to-base64';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '../../modules/notification/notification.service';
import {UsersService} from '../../store/users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  imageUploaded: string = '';
  formModel = new UserForm();

  @Input()
  user: null | UserInterface = null;

  constructor(
    private readonly activeModal: NgbActiveModal,
    private readonly notificationService: NotificationService,
    private readonly usersService: UsersService,
  ) {
  }

  ngOnInit() {
    if (this.hasUser()) {
      this.imageUploaded = this.user?.avatar || '';
      this.formModel.setupUser(this.user as UserInterface);
      this.formModel.disableUsername();
    }
  }

  async removeProfilePicture() {
    const confirm = await this.notificationService.alert('Removing Profile picture', 'Are you sure you want to remove your profile picture?');
    if (confirm) {
      this.imageUploaded = '';
      this.formModel.resetAvatar();
    }
  }

  async onImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      this.imageUploaded = await fileToBase64(file);
    }
  }

  async removeUser() {
    if (!this.hasUser()) {
      return;
    }
    const confirm = await this.notificationService.alert('Removing User', 'Are you sure you want to remove this User?');
    if (confirm) {
      this.usersService.removeUser(this.user as UserInterface);
      this.closeModal();
    }
  }

  submit() {
    if (this.formModel.invalid) {
      return;
    }
    const model: UserInterface = Object.assign({}, this.user, this.formModel.value);
    model.avatar = this.imageUploaded;
    if (this.hasUser()) {
      this.usersService.updateUser(model);
    } else {
      this.usersService.addUser(model);
    }
    this.closeModal();
  }

  closeModal() {
    this.activeModal.close();
  }

  hasUser(): boolean {
    return this.user !== null;
  }
}
