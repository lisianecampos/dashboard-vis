import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
More(Highcharts);

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

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
        text: 'Proposições de Acordo com Tema e Mandato de Apresentação'
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} proposições<sub></sub>'
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
      series: [
        {
          "name": "Fernando Collor",
          "data": [
            {
              "name": "Administração Pública",
              "value": 98
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 3
            },
            {
              "name": "Comunicações",
              "value": 16
            },
            {
              "name": "Esporte e Lazer",
              "value": 5
            },
            {
              "name": "Economia",
              "value": 49
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 16
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 24
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 34
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 18
            },
            {
              "name": "Educação",
              "value": 17
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 66
            },
            {
              "name": "Estrutura Fundiária",
              "value": 27
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 31
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 19
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 35
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 13
            },
            {
              "name": "Saúde",
              "value": 34
            },
            {
              "name": "Defesa e Segurança",
              "value": 25
            },
            {
              "name": "Trabalho e Emprego",
              "value": 563
            },
            {
              "name": "Turismo",
              "value": 2
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 83
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 3
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 3
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 19
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 5
            },
            {
              "name": "Direito Constitucional",
              "value": 1
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 188
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 4
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 73
            },
            {
              "name": "Direito e Justiça",
              "value": 18
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Itamar Franco",
          "data": [
            {
              "name": "Administração Pública",
              "value": 36
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 1
            },
            {
              "name": "Comunicações",
              "value": 1
            },
            {
              "name": "Esporte e Lazer",
              "value": 2
            },
            {
              "name": "Economia",
              "value": 14
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 3
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 7
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 10
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 7
            },
            {
              "name": "Educação",
              "value": 3
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 17
            },
            {
              "name": "Estrutura Fundiária",
              "value": 6
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 13
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 14
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 7
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 6
            },
            {
              "name": "Saúde",
              "value": 11
            },
            {
              "name": "Defesa e Segurança",
              "value": 15
            },
            {
              "name": "Trabalho e Emprego",
              "value": 128
            },
            {
              "name": "Turismo",
              "value": 1
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 34
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 2
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 1
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 10
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 0
            },
            {
              "name": "Direito Constitucional",
              "value": 0
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 73
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 0
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 36
            },
            {
              "name": "Direito e Justiça",
              "value": 10
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Fernando Henrique Cardoso",
          "data": [
            {
              "name": "Administração Pública",
              "value": 949
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 225
            },
            {
              "name": "Comunicações",
              "value": 1483
            },
            {
              "name": "Esporte e Lazer",
              "value": 107
            },
            {
              "name": "Economia",
              "value": 418
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 98
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 466
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 647
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 439
            },
            {
              "name": "Educação",
              "value": 616
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 315
            },
            {
              "name": "Estrutura Fundiária",
              "value": 228
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 521
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 206
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 175
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 80
            },
            {
              "name": "Saúde",
              "value": 716
            },
            {
              "name": "Defesa e Segurança",
              "value": 444
            },
            {
              "name": "Trabalho e Emprego",
              "value": 1529
            },
            {
              "name": "Turismo",
              "value": 31
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 934
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 37
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 12
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 713
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 33
            },
            {
              "name": "Direito Constitucional",
              "value": 8
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 1119
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 50
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 427
            },
            {
              "name": "Direito e Justiça",
              "value": 32
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Luiz Inácio Lula da Silva",
          "data": [
            {
              "name": "Administração Pública",
              "value": 1624
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 332
            },
            {
              "name": "Comunicações",
              "value": 5587
            },
            {
              "name": "Esporte e Lazer",
              "value": 147
            },
            {
              "name": "Economia",
              "value": 665
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 217
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 701
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 904
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 915
            },
            {
              "name": "Educação",
              "value": 1347
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 710
            },
            {
              "name": "Estrutura Fundiária",
              "value": 444
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 717
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 454
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 309
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 508
            },
            {
              "name": "Saúde",
              "value": 1158
            },
            {
              "name": "Defesa e Segurança",
              "value": 821
            },
            {
              "name": "Trabalho e Emprego",
              "value": 2012
            },
            {
              "name": "Turismo",
              "value": 109
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 1388
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 47
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 7
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 1365
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 35
            },
            {
              "name": "Direito Constitucional",
              "value": 2
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 1398
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 549
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 507
            },
            {
              "name": "Direito e Justiça",
              "value": 45
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Dilma Rousseff",
          "data": [
            {
              "name": "Administração Pública",
              "value": 1219
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 82
            },
            {
              "name": "Comunicações",
              "value": 1771
            },
            {
              "name": "Esporte e Lazer",
              "value": 175
            },
            {
              "name": "Economia",
              "value": 390
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 732
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 530
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 951
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 1185
            },
            {
              "name": "Educação",
              "value": 1012
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 605
            },
            {
              "name": "Estrutura Fundiária",
              "value": 106
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 500
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 366
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 432
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 274
            },
            {
              "name": "Saúde",
              "value": 1398
            },
            {
              "name": "Defesa e Segurança",
              "value": 774
            },
            {
              "name": "Trabalho e Emprego",
              "value": 1637
            },
            {
              "name": "Turismo",
              "value": 71
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 692
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 49
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 175
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 557
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 648
            },
            {
              "name": "Direito Constitucional",
              "value": 23
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 1780
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 765
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 593
            },
            {
              "name": "Direito e Justiça",
              "value": 146
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Michel Temer",
          "data": [
            {
              "name": "Administração Pública",
              "value": 230
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 21
            },
            {
              "name": "Comunicações",
              "value": 243
            },
            {
              "name": "Esporte e Lazer",
              "value": 38
            },
            {
              "name": "Economia",
              "value": 182
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 108
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 207
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 408
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 410
            },
            {
              "name": "Educação",
              "value": 251
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 194
            },
            {
              "name": "Estrutura Fundiária",
              "value": 36
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 130
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 142
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 164
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 90
            },
            {
              "name": "Saúde",
              "value": 499
            },
            {
              "name": "Defesa e Segurança",
              "value": 235
            },
            {
              "name": "Trabalho e Emprego",
              "value": 504
            },
            {
              "name": "Turismo",
              "value": 36
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 344
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 5
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 30
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 163
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 159
            },
            {
              "name": "Direito Constitucional",
              "value": 14
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 453
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 223
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 151
            },
            {
              "name": "Direito e Justiça",
              "value": 37
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 0
            }
          ]
        },
        {
          "name": "Jair Bolsonaro",
          "data": [
            {
              "name": "Administração Pública",
              "value": 263
            },
            {
              "name": "Arte, Cultura e Religião",
              "value": 67
            },
            {
              "name": "Comunicações",
              "value": 121
            },
            {
              "name": "Esporte e Lazer",
              "value": 111
            },
            {
              "name": "Economia",
              "value": 185
            },
            {
              "name": "Cidades e Desenvolvimento Urbano",
              "value": 36
            },
            {
              "name": "Direito Civil e Processual Civil",
              "value": 216
            },
            {
              "name": "Direito Penal e Processual Penal",
              "value": 711
            },
            {
              "name": "Direitos Humanos e Minorias",
              "value": 845
            },
            {
              "name": "Educação",
              "value": 539
            },
            {
              "name": "Meio Ambiente e Desenvolvimento Sustentável",
              "value": 532
            },
            {
              "name": "Estrutura Fundiária",
              "value": 46
            },
            {
              "name": "Previdência e Assistência Social",
              "value": 313
            },
            {
              "name": "Processo Legislativo e Atuação Parlamentar",
              "value": 183
            },
            {
              "name": "Energia, Recursos Hídricos e Minerais",
              "value": 238
            },
            {
              "name": "Relações Internacionais e Comércio Exterior",
              "value": 62
            },
            {
              "name": "Saúde",
              "value": 2374
            },
            {
              "name": "Defesa e Segurança",
              "value": 209
            },
            {
              "name": "Trabalho e Emprego",
              "value": 1514
            },
            {
              "name": "Turismo",
              "value": 79
            },
            {
              "name": "Viação, Transporte e Mobilidade",
              "value": 891
            },
            {
              "name": "Ciência, Tecnologia e Inovação",
              "value": 13
            },
            {
              "name": "Agricultura, Pecuária, Pesca e Extrativismo",
              "value": 55
            },
            {
              "name": "Indústria, Comércio e Serviços",
              "value": 494
            },
            {
              "name": "Direito e Defesa do Consumidor",
              "value": 180
            },
            {
              "name": "Direito Constitucional",
              "value": 45
            },
            {
              "name": "Finanças Públicas e Orçamento",
              "value": 712
            },
            {
              "name": "Homenagens e Datas Comemorativas",
              "value": 379
            },
            {
              "name": "Política, Partidos e Eleições",
              "value": 279
            },
            {
              "name": "Direito e Justiça",
              "value": 71
            },
            {
              "name": "Ciências Exatas e da Terra",
              "value": 0
            },
            {
              "name": "Ciências Sociais e Humanas",
              "value": 1
            }
          ]
        }
      ]
    };
  }

}
