import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {

  @Output() valuesChanged = new EventEmitter<number[]>();
  @Input() disable: boolean = false;

  form!: FormGroup;

  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(631159200000);
    this.maxDate = new Date(1638327600000);
  }

  totalPropositions: string = '0';

  ngOnInit(): void {


  }

  disableButton(): boolean {

    return this.disable;
  }

  @Input() set propositionsTotal(value: string) {
    this.totalPropositions = value;
  }

  @Input() set showValues(value: number[]) {

    this.form = new FormGroup({
      start: new FormControl(new Date(1546308000000)),
      end: new FormControl(new Date())
    });

  }

  saveValues(): void {

    let startDate: string = this.form.controls['start'].value;
    let endDate = this.form.controls['end'].value;

    this.valuesChanged.emit([Date.parse(startDate), Date.parse(endDate)]);
  }
}
