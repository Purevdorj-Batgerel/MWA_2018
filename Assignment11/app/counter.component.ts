import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decreaseValue()">-</button>
      {{counterValue}}
      <button (click)="increaseValue()">+</button>
    </div>
  `,
  styles: []
})
export class CounterComponent {
  @Input('counter') counterValue: number;
  @Output() counterChange = new EventEmitter();

  decreaseValue(): void {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  increaseValue(): void {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}
