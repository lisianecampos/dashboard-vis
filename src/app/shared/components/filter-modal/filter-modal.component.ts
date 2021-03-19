import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {

  @Output() valuesChanged = new EventEmitter<number[]>();

  form!: FormGroup;
  start = 0;
  end = 0;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      startYear: new FormControl('', Validators.required),
      endYear: new FormControl('', Validators.required),
    });
  }

  saveValues(): void {
    this.start = this.form.controls['startYear'].value;
    this.end = this.form.controls['endYear'].value;
    console.log(this.start);
    this.valuesChanged.emit([this.start, this.end]);
  }

  cancel() : void {
    // this.dialogRef.close();
  }
}
