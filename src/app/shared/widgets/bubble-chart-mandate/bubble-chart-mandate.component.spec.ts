import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartMandateComponent } from './bubble-chart-mandate.component';

describe('BubbleChartMandateComponent', () => {
  let component: BubbleChartMandateComponent;
  let fixture: ComponentFixture<BubbleChartMandateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleChartMandateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleChartMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
