import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
import {BubbleChartInfo} from '../../../models/BubbleChartInfo';
More(Highcharts);

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  @Input() data: BubbleChartInfo = new BubbleChartInfo();

  constructor() { }

  Highcharts: any = Highcharts;
  chartOptions: any;

  ngOnInit(): void {

    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'packedbubble',
        height: '60%',
      },
      title: {
        text: 'Proposições de Acordo com Tema e Mandato de Apresentação: Packed Bubble Chart'
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} proposições<sub></sub>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series: this.data.objects
    };
  }

}
