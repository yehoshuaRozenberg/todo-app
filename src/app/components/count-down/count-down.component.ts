import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {


  @Input() set dDate(dDate: Date) {
    this._dDay = dDate;
  }

  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private miliSecondsInSecond = 1000;
  private secondesInMinute = 60;
  private minutesInHour = 60;
  private hoursInDay = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(timeDiff / this.miliSecondsInSecond % this.secondesInMinute);
    this.minutes = Math.floor(timeDiff / (this.miliSecondsInSecond * this.secondesInMinute) % this.minutesInHour);
    this.hours = Math.floor(timeDiff / (this.miliSecondsInSecond * this.secondesInMinute * this.minutesInHour) % this.hoursInDay);
    this.days = Math.floor(timeDiff / (this.miliSecondsInSecond * this.secondesInMinute * this.minutesInHour * this.hoursInDay));
  }

}
