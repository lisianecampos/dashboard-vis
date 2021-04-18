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
    this.minDate = new Date(currentYear - 30, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
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

    console.log(this.form.controls['start'].value);
    console.log(this.form.controls['end'].value);


    let startDate: string = this.form.controls['start'].value;
    let endDate = this.form.controls['end'].value;

    // console.log(myDate);
    this.valuesChanged.emit([Date.parse(startDate), Date.parse(endDate)]);
  }
}
