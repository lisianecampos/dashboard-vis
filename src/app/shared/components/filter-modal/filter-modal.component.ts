import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
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
  // start = 0;
  // end = 0;

  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 30, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  totalPropositions: string = '0';

  // form: FormGroup = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });

  // constructor() { }

  ngOnInit(): void {


  }

  disableButton(): boolean {

    return false;
    // const startValue = this.range.controls['start'].value === null || this.range.controls['start'].value === '';
    // const endValue = this.range.controls['end'].value === null || this.range.controls['end'].value === '';

    // return startValue || endValue || this.disable;
  }

  @Input() set propositionsTotal(value: string) {
    this.totalPropositions = value;
  }

  @Input() set showValues(value: number[]) {

    this.form = new FormGroup({
      start: new FormControl(new Date(1546308000000)),
      end: new FormControl(new Date())
    });

   // this.form.controls['start'].setValue((new Date().getTime() - 3888000000));
  //  this.form.controls['end'].setValue(value[1]);
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
