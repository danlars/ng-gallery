import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../../interfaces/user.interface';

export class UserForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      avatar: new FormControl('', []),
    });
  }

  setupUser(user: UserInterface) {
    this.patchValue({
      ...user,
      avatar: ''
    });
  }

  disableUsername() {
    this.controls.username.disable({
      onlySelf: true,
    });
  }

  resetAvatar() {
    this.patchValue({avatar: ''});
  }
}
