import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {StackedPieChartModel} from '../../../models/StackedPieChartModel';
// import More from 'highcharts/highcharts-more'
// More(Highcharts);

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {

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
        text: 'Temas das Proposições por Ano'
      },
      xAxis: {
        categories: this.data.years //['1990', '1', '2', '3', '4', '5', '6', '7', '8'] // result.years
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantidade de Proposições por Ano' // descricao
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: this.data.topicQuantity
      // series: [{
      //   name: 'John', // topicquantity.topic map name, topicquantity.quantityyear .map
      //   data: [5, 3, 4, 7, 2, 6, 7, 8] // quantidade // [20, 30, 40 ...]
      // }, {
      //   name: 'Jane', // tema2
      //   data: [2, 2, 3, 2, 1, 5, 6, 7] // quantidade
      // }, {
      //   name: 'Joe',
      //   data: [3, 4, 4, 2, 5, 1, 2, 3]
      // }]
    };


  }
}
