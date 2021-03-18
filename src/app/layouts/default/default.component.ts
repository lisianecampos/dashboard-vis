import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {PieComponent} from '../../shared/widgets/pie/pie.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @ViewChild('pie') pie: PieComponent | undefined;
  @Output() valuesChanged = new EventEmitter<number[]>();

  sideBarOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggled($event: any): void {
    this.sideBarOpened = !this.sideBarOpened;
  }

  searchValues(start: number, end: number) {
    this.valuesChanged.emit([1,2]);
  }
}
