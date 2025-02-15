import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DelayableMasterChannel } from 'soundcraft-ui-connection';

@Component({
  selector: 'sui-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css'],
  standalone: true,
  imports: [AsyncPipe, NgIf],
})
export class DelayComponent {
  @Input() channel?: DelayableMasterChannel;
  @Input() maxValue = 250;

  setDelay(level: string) {
    this.channel && this.channel.setDelay(Number(level));
  }

  changeDelay(offset: number) {
    this.channel && this.channel.changeDelay(offset);
  }
}
