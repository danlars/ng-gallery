import {Component, Input, OnInit} from '@angular/core';
import {TagInterface} from '../../interfaces/tag.interface';

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
    let hexColor = this.tag.color;
    if (!hexColor) {
      return 'black';
    }

    if (hexColor.slice(0, 1) === '#') {
      hexColor = hexColor.slice(1);
    }

    // Convert to RGB value
    var r = parseInt(hexColor.substr(0, 2), 16);
    var g = parseInt(hexColor.substr(2, 2), 16);
    var b = parseInt(hexColor.substr(4, 2), 16);

    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    return (yiq >= 128) ? 'black' : 'white';
  }
}
