import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarChartMandateComponent } from './stacked-bar-chart-mandate.component';

describe('StackedBarChartMandateComponent', () => {
  let component: StackedBarChartMandateComponent;
  let fixture: ComponentFixture<StackedBarChartMandateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedBarChartMandateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBarChartMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
