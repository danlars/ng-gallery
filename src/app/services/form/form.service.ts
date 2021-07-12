import { Injectable } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageFormComponent} from '../../modals/image-form/image-form.component';
import {ImageInterface} from '../../interfaces/image.interface';
import {TagInterface} from '../../interfaces/tag.interface';
import {TagFormComponent} from '../../modals/tag-form/tag-form.component';

@Injectable()
export class FormService {

  constructor(private readonly modalService: NgbModal) { }

  openImageForm(props: {image: null | ImageInterface}) {
    const componentRef = this.modalService.open(
      ImageFormComponent,
      {
        size: 'xl',
        animation: true,
        backdrop: true,
      }
    );
    componentRef.componentInstance.image = props.image;
  }

  openTagForm(props: {tag: null | TagInterface}) {
    const componentRef = this.modalService.open(
      TagFormComponent,
      {
        size: 'xl',
        animation: true,
        backdrop: true,
      }
    );
    componentRef.componentInstance.tag = props.tag;
  }
}
