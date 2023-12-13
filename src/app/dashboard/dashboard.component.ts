import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  minutes: number = 25;
  seconds: number = 0;
  timerRunning: boolean = false;
  timerInterval: any;

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            this.timerRunning = false;
            clearInterval(this.timerInterval);
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          this.seconds--;
        }
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.timerRunning) {
      this.timerRunning = false;
      clearInterval(this.timerInterval);
    }
  }

  resetTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.minutes = 25;
    this.seconds = 0;
  }
}


