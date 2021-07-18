import {Component, Input} from '@angular/core';
import {avatarBackgroundColors} from './avatar-background-colors';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input()
  name: string = '';

  @Input()
  image: string = '';

  @Input()
  fontSize: string = '4rem';

  hasImage(): boolean {
    return !!this.image;
  }

  getCharacters(): string {
    if (!this.name) {
      return '';
    }

    return this.name.split(' ').map(chunk => chunk.charAt(0) || '').join('').slice(0, 3).toUpperCase();
  }

  getBackgroundColor(): string {
    if (!this.name) {
      return 'transparent';
    }
    const asciiCodeSum = this.calculateAsciiCode(this.name);
    return avatarBackgroundColors[asciiCodeSum % avatarBackgroundColors.length];
  }

  private calculateAsciiCode(value: string): number {
    return value
      .split('')
      .map(letter => letter.charCodeAt(0))
      .reduce((previous, current) => previous + current);
  }
}
