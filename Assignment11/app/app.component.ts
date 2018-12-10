import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter counter="6" (counterChange)="counterChange($event)"></app-counter> {{ComponentCounterValue}}',
  styleUrls: []
})
export class AppComponent {
  title = 'ngApp';
  ComponentCounterValue: number;

  counterChange(number: number) {
    console.log(number);
    this.ComponentCounterValue = number;
  }
}
