import {Component, Input, OnInit} from '@angular/core';
import {TagInterface} from '../../interfaces/tag.interface';
import {getForegroundColor} from '../../functions/get-foreground-color';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input()
  tag: TagInterface = {
    name: '',
    color: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  getBackgroundColor() {
    if (!this.tag.color) {
      return 'lightgrey';
    }
    return this.tag.color;
  }

  getText() {
    if (!this.tag.name) {
      return 'Default';
    }
    return this.tag.name;
  }

  getTextColor() {
    return getForegroundColor(this.tag.color);
  }
}
