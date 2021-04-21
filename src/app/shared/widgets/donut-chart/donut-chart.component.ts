import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
More(Highcharts);

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  constructor() { }

  @Input() data: any[][] = [];

  Highcharts: any = Highcharts;
  chartOptions: any;

  ngOnInit(): void {

    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Partidos dos Autores das Proposições',
        align: 'center',
        // verticalAlign: 'middle',
        // y: 60
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '40%',
        data: this.data
          // {
          //   name: 'Other',
          //   y: 7.61,
          //   dataLabels: {
          //     enabled: true
          //   }
          // }

      }]
    };
  }

}
