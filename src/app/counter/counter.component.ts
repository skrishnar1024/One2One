import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;
  showDecrement = false;

  colors = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

  currentColors = [];

  currentIndex = 0;

  increment() {
    this.count++;
    if (this.count > 0) {
      this.showDecrement = true;
    }
  }

  decrement() {
    this.count--;

    if (this.count === 0) {
      this.showDecrement = false;
    }
  }

  updateCurrentColors() {
    if (this.currentIndex <= this.colors.length - 1) {
      this.currentColors = [];
      this.currentColors[0] = this.colors[this.currentIndex++];
      this.currentColors[1] = this.colors[this.currentIndex++];
    }
  }
}
