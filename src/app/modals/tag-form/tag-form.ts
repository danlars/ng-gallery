import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TagInterface} from '../../interfaces/tag.interface';

export class TagForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      color: new FormControl('', [Validators.required]),
    });
  }

  setupTag(tag: TagInterface) {
    this.patchValue(tag);
  }
}
