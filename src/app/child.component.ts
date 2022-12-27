import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'child-app',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Angular ' + VERSION.major;
  // @Input()
  // uname: string;
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  passData() {
    this.notify.emit('this msg is comming from child component');
  }
}
