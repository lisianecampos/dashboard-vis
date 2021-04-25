import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @Input() data: {name: string; y: number}[] = [];

  constructor() { }

  Highcharts: any = Highcharts;
  chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Tipos de Projetos de Lei'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b><br>({point.y} proposições)<br> '
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };


    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

    HC_exporting(this.Highcharts);
  }

}
