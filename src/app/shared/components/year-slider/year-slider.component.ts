import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-year-slider',
  templateUrl: './year-slider.component.html',
  styleUrls: ['./year-slider.component.scss']
})
export class YearSliderComponent implements OnInit {

  @Output() rangeChanged = new EventEmitter<number>();

  value = 20;
  highValue = 500;
  startValueIndex = -1;
  endValueIndex = -1;
  options: Options = {
    floor: 2000,
    ceil: 2020,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelection(): void {
    this.rangeChanged.emit(this.value);
  }
}
