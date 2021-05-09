import {Component, Input, OnInit} from '@angular/core';
import {StackedPieChartModel} from '../../../models/StackedPieChartModel';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stacked-bar-chart-mandate',
  templateUrl: './stacked-bar-chart-mandate.component.html',
  styleUrls: ['./stacked-bar-chart-mandate.component.scss']
})
export class StackedBarChartMandateComponent implements OnInit {


  @Input() data: StackedPieChartModel = new StackedPieChartModel();

  constructor() {
  }

  Highcharts: any = Highcharts;
  chartOptions: any;

  ngOnInit(): void {

    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Proposições de Acordo com Tema e Mandato de Apresentação: Stacked Bar Chart'
      },
      xAxis: {
        categories: this.data.years
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantidade de Proposições por Mandato'
        }
      },
      legend: {
        reversed: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: this.data.topicQuantity
    };
  }

}
