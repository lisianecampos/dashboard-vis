import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
import Treemap from 'highcharts/modules/treemap'
Treemap(Highcharts);
More(Highcharts);

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  constructor() {
  }

  Highcharts: any = Highcharts;
  chartOptions: any;

  ngOnInit(): void {

    this.Highcharts = Highcharts;
    this.chartOptions = {
      series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
          level: 1,
         // layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            style: {
              fontSize: '15px',
              fontWeight: 'bold'
            }
          }
        }],
        data: [{
          id: 'PT',
          name: 'Apples',
          color: "#EC2500"
        },
          {
            id: 'PPL',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'PROS',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'DEM',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'PCdoB',
            name: 'Apples',
            color: "#EC2500"
          }
          ,{
            id: 'PCO',
            name: 'Apples',
            color: "#EC2500"
          },{
          id: 'PDT',
          name: 'Bananas',
          color: "#ECE100"
        }, {
          id: 'PHS',
          name: 'Oranges',
          color: '#EC9800'
        },
          {
            id: 'PMN',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PPS',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PR',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PRP',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PRTB',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSB',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSC',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSD',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSDB',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSL',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSOL',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PSTU',
            name: 'Oranges',
            color: '#EC9800'
          },

          //
          {
            id: 'PTB',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'PTC',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'PV',
            name: 'Apples',
            color: "#EC2500"
          },
          {
            id: 'S. PART.',
            name: 'Apples',
            color: "#EC2500"
          }
          ,{
            id: 'PCB',
            name: 'Apples',
            color: "#EC2500"
          },{
            id: 'REDE',
            name: 'Bananas',
            color: "#ECE100"
          }, {
            id: 'PMB',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PODE',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'AVANTE',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'MDB',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PATRI',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'NOVO',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'DC',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PP',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'SOLIDARIEDADE',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'CIDADANIA',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PL',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'PATRIOTA',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            id: 'REPUBLICANOS',
            name: 'Oranges',
            color: '#EC9800'
          },
          {
            "name": "Benes Leocádio",
            "parent": "PRB",
            "value": 20
          },
          {
            "name": "Vavá Martins",
            "parent": "PRB",
            "value": 10
          },
          {
            "name": "Ossesio Silva",
            "parent": "PRB",
            "value": 29
          },
          {
            "name": "André Abdon",
            "parent": "PRB",
            "value": 8
          },
          {
            "name": "Aline Gurgel",
            "parent": "PRB",
            "value": 21
          },
          {
            "name": "Cleber Verde",
            "parent": "PRB",
            "value": 329
          },
          {
            "name": "Pastor Luciano Braga",
            "parent": "PRB",
            "value": 10
          },
          {
            "name": "Aroldo Martins",
            "parent": "PRB",
            "value": 21
          },

          {
            "name": "Salvador Zimbaldi",
            "parent": "PROS",
            "value": 44
          },
          {
            "name": "Rafael Motta",
            "parent": "PROS",
            "value": 61
          },
          {
            "name": "Hugo Leal",
            "parent": "PROS",
            "value": 152
          },
          {
            "name": "Edson Silva",
            "parent": "PROS",
            "value": 11
          },
          {
            "name": "Valtenir Pereira",
            "parent": "PROS",
            "value": 76
          },
          {
            "name": "Beto Salame",
            "parent": "PROS",
            "value": 6
          },
          {
            "name": "Dr. Agripino Magalhães",
            "parent": "PROS",
            "value": 1
          },
          {
            "name": "Major Fábio",
            "parent": "PROS",
            "value": 177
          },
          {
            "name": "Juscelino Rezende Filho",
            "parent": "PRP",
            "value": 9
          },
          {
            "name": "REGINA GORDILHO",
            "parent": "PRP",
            "value": 8
          },
          {
            "name": "Jânio Natal",
            "parent": "PRP",
            "value": 8
          },
          {
            "name": "Chico das Verduras",
            "parent": "PRP",
            "value": 3
          },
          {
            "name": "Marcelo Álvaro Antônio",
            "parent": "PRP",
            "value": 25
          },
          {
            "name": "Alexandre Valle",
            "parent": "PRP",
            "value": 17
          },
          {
            "name": "ADHEMAR DE BARROS FILHO",
            "parent": "PRP",
            "value": 36
          },
          {
            "name": "Nivaldo Albuquerque",
            "parent": "PRP",
            "value": 47
          },
          {
            "name": "Cícero Almeida",
            "parent": "PRTB",
            "value": 12
          },
          {
            "name": "Aureo",
            "parent": "PRTB",
            "value": 146
          },
          {
            "name": "Juvenil",
            "parent": "PRTB",
            "value": 27
          },
          {
            "name": "Juvenil Alves",
            "parent": "PRTB",
            "value": 20
          },
          {
            "name": "Cícero Almeida",
            "parent": "PRTB",
            "value": 12
          },
          {
            "name": "Aureo",
            "parent": "PRTB",
            "value": 146
          },
          {
            "name": "Juvenil",
            "parent": "PRTB",
            "value": 27
          },
          {
            "name": "Juvenil Alves",
            "parent": "PRTB",
            "value": 20
          },

          {
            "name": "Hamilton Casara",
            "parent": "PSB",
            "value": 7
          },
          {
            "name": "Domingos Neto",
            "parent": "PSB",
            "value": 41
          },
          {
            "name": "Márcio França",
            "parent": "PSB",
            "value": 54
          },
          {
            "name": "Stefano Aguiar",
            "parent": "PSB",
            "value": 14
          },
          {
            "name": "Heráclito Fortes",
            "parent": "PSB",
            "value": 20
          },
          {
            "name": "PAULO CÉSAR BALTAZAR DA NÓBREGA",
            "parent": "PSB",
            "value": 1
          },
          {
            "name": "ADELSON SALVADOR",
            "parent": "PSB",
            "value": 19
          },
          {
            "name": "Denis Bezerra",
            "parent": "PSB",
            "value": 46
          },




        ]
      }],
      title: {
        text: 'Tree Map'
      }
    };


  }

}
