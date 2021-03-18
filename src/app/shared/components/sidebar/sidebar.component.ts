import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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


  // onValueChanged(year: number): number {
  //   console.log(year);
  //  // return this.minYear = year;
  //   return year;
  // }
  //
  // onHighChanged(year: number): number {
  //   console.log(year);
  //   return this.maxYear = year;
  // }
}
