import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageInterface} from '../../interfaces/image.interface';

export class ImageForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      imageSource: new FormControl(''),
    });
  }

  getFormValues(): ImageInterface {
    return {
      title: this.get('title')?.value || '',
      description: this.get('description')?.value || '',
      image: this.get('imageSource')?.value || '',
    }
  }

  disableImage() {
    this.controls['image'].disable();
  }

  updateFormControlValue(image: ImageInterface) {
    this.patchValue({
      id: image.id,
      title: image.title,
      description: image.description,
      imageSource: image.image
    })
  }
}
