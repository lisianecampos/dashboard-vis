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

  // form!: FormGroup;
  // start = 0;
  // end = 0;

  totalPropositions: string = '0';
  range: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {


  }

  disableButton(): boolean {
    console.log(this.range.controls['start'].value);

    const startValue = this.range.controls['start'].value === null || this.range.controls['start'].value === '';
    const endValue = this.range.controls['end'].value === null || this.range.controls['end'].value === '';

    return startValue || endValue || this.disable;
  }

  @Input() set propositionsTotal(value: string) {
    this.totalPropositions = value;
  }

  // @Input() set showValues(value: number[]) {
  //   this.form = new FormGroup({
  //     startYear: new FormControl('', Validators.required),
  //     endYear: new FormControl('', Validators.required),
  //   });
  //
  //   this.form.controls['startYear'].setValue(value[0]);
  //   this.form.controls['endYear'].setValue(value[1]);
  // }
  //
  // saveValues(): void {
  //   this.start = this.form.controls['startYear'].value;
  //   this.end = this.form.controls['endYear'].value;
  //   console.log(this.start);
  //   this.valuesChanged.emit([this.start, this.end]);
  // }
  //
  // cancel() : void {
  //   // this.dialogRef.close();
  // }

  saveValues(): void {
    // this.start = this.form.controls['startYear'].value;
    // this.end = this.form.controls['endYear'].value;
    // console.log(this.start);
    // this.valuesChanged.emit([this.start, this.end]);
  }
}
