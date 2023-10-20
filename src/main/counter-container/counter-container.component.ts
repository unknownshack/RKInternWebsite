import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  @Input() targetValue: number = 10;
  @Input() targetName: string = "Project";
  counterValue = 0;

  ngOnInit(){
    this.incrementCounter();
  }

  incrementCounter() {
    const incrementStep = 1; // The amount to increment the counter in each step
    const incrementInterval = 5; // Time interval between increments in milliseconds

    const intervalId = setInterval(() => {
      this.counterValue += incrementStep;
      if (this.counterValue >= this.targetValue) {
        this.counterValue = this.targetValue;
        clearInterval(intervalId);
      }
    }, incrementInterval);

  }
}
