import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {take, finalize} from 'rxjs/operators';
import {TypeQuantity} from '../../models/TypeQuantity';
import {StackedPieChartModel} from '../../models/StackedPieChartModel';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {BubbleChartInfo} from '../../models/BubbleChartInfo';
import {StackBarBody} from '../../models/StackBarBody';
import {TopicQuantity} from '../../models/TopicQuantity';
import {TopicQuantityModel} from '../../models/TopicQuantityModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  propositions: TypeQuantity[] = [];
  propositionsPie: {name: string; y: number}[] = [];

  controlStackChart: boolean = false;
  controlBubbleChart: boolean = false;

  dateValues: number[] = [631159200000, 1620442800000];
  partiesQuantity: string[][] = [];
  partiesQuantityFixed: any[][] = [];

  totalPropositions: string = '0';
  totalPropositions2: string = '0';
  allPropositions = 88568;
  totalPropositions3: string = this.allPropositions.toLocaleString('pt-BR');

  topicStackedChart: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModel: StackedPieChartModel = new StackedPieChartModel();

  topicStackedChartMandate: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModelMandate: StackedPieChartModel = new StackedPieChartModel();

  bubbleChartTopicByMandate: BubbleChartInfo = new BubbleChartInfo();
  bubbleChartTopicByMandateModel: BubbleChartInfo = new BubbleChartInfo();

  bubbleChartTopicByMandateInverse: BubbleChartInfo = new BubbleChartInfo();
  bubbleChartTopicByMandateInverseModel: BubbleChartInfo = new BubbleChartInfo();

  selectedTopicsList: string[] = [];

  topicsList: string[] = [
    'Administração Pública', 'Agricultura, Pecuária, Pesca e Extrativismo', 'Arte, Cultura e Religião', 'Cidades e Desenvolvimento Urbano', 'Ciências Exatas e da Terra',
    'Ciências Sociais e Humanas',
    'Ciência, Tecnologia e Inovação', 'Comunicações', 'Defesa e Segurança', 'Direito Civil e Processual Civil', 'Direito Constitucional',
    'Direito e Defesa do Consumidor', 'Direito e Justiça',
    'Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Economia', 'Educação', 'Energia, Recursos Hídricos e Minerais', 'Esporte e Lazer',
    'Estrutura Fundiária', 'Finanças Públicas e Orçamento',
    'Homenagens e Datas Comemorativas', 'Indústria, Comércio e Serviços', 'Meio Ambiente e Desenvolvimento Sustentável', 'Não Especificado',
    'Política, Partidos e Eleições', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar',
    'Relações Internacionais e Comércio Exterior', 'Saúde', 'Trabalho e Emprego', 'Turismo', 'Viação, Transporte e Mobilidade',
  ];

  stackBarBody: StackBarBody = new StackBarBody('', '', '');

  stackedChartModelDraft: StackedPieChartModel = new StackedPieChartModel();
  stackedChartModel: StackedPieChartModel = new StackedPieChartModel();

  showStackedBarChart: boolean = false;

  range: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {

  //  this.dateValues = [1546308000000, 1618110000000];
    this.dateValues = [1546308000000, 1618110000000];
    let stackBarBody = new StackBarBody(this.dateValues[0].toString(), this.dateValues[1].toString(), this.selectedTopicsList[0]);

    // this.getDataTypes(this.dateValues);
    this.getFirstTab(this.dateValues);
    //this.getSecondTab(this.dateValues);
    this.getThirdTab(this.dateValues);
    this.getSecondTabTest(stackBarBody, 0);

  }

  getSecondTabInit(values: number[]) {
    this.stackBarBody = new StackBarBody(values[0].toString(), values[1].toString(), this.selectedTopicsList[0]);
    console.log('posicition 0' + this.selectedTopicsList);
    this.getSecondTabTest(this.stackBarBody, 0);

  }

  getSecondTabTest(body: StackBarBody, control: number) {

    this.totalPropositions2 = '0';

    let model = new TopicQuantityModel();
    let modelResponse = new TopicQuantity();
    let years: string[] = [];

    let length = this.selectedTopicsList.length;

    if(length == 0) {
      this.selectedTopicsList = this.topicsList;
      body.tema = this.selectedTopicsList[control];
      length = this.selectedTopicsList.length;
    }

    this.showStackedBarChart = false;
    this.dashboardService.getTopicByYear2(body)
      .pipe(
        finalize(() => {

          modelResponse = model.topicQuantity;
          years = model.years;
          this.stackedChartModelDraft.years = years;
          this.stackedChartModelDraft.topicQuantity.push(modelResponse);

          console.log(this.stackedChartModelDraft);

          control = control + 1;

          if (control < length) {
            body.tema = this.selectedTopicsList[control];

              this.getSecondTabTest(body, control);

          }
          else {
            this.stackedChartModel = this.stackedChartModelDraft;
            this.selectedTopicsList = [];
            const topics = this.stackedChartModel.topicQuantity.length;
            let total = 0;
            let value = 0;
            for (let i = 0; i < topics; i++) {
              for (let j = 0; j < this.stackedChartModel.years.length; j++) {
                value = parseInt(this.stackedChartModel.topicQuantity[i].data[j]);
                total = total + value;
              }
            }
            this.totalPropositions2 = total.toLocaleString('pt-BR');
            this.showStackedBarChart = true;
            this.stackedChartModelDraft = new StackedPieChartModel();
          }
        })
      )
      .subscribe(data => {
          model = data;
        }
      );

    // this.dashboardService.getTopicByMandate(stackBarBody)
    //   .pipe(
    //     finalize(() => {
    //       this.topicStackedChartModelMandate = this.topicStackedChartMandate;
    //     })
    //   )
    //   .subscribe(data => {
    //       this.topicStackedChartMandate = data;
    //     }
    //   );

  }

  getStackedPieChartMandate() {

    this.dashboardService.getStackedPieChartMandate()
      .pipe(
        finalize(() => {
          this.topicStackedChartModelMandate = this.topicStackedChartMandate;

        })
      )
      .subscribe(data => {
          this.topicStackedChartMandate = data;
        }
      );

  }

  createTemas(temas: any[]) {
    const arr = temas.map(tema => {
      return new FormControl(tema.selected || false);
    });
    return new FormArray(arr);
  }

  getSelectedTopis(topics: string[]) {
    this.selectedTopicsList = topics;
    console.log('topics' + topics);
  }

  getFirstTab(values: number[]) {

    this.propositionsPie = [];
    this.partiesQuantityFixed = [];
    this.totalPropositions = '0';
    let years = [];
    let startyear = values[0];
    let endyear = values[1];

    this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));

          let total = 0;
          for (let i = 0; i < this.propositions.length; i++) {

            total = total + this.propositions[i].quantity;
          }

          this.totalPropositions = total.toLocaleString('pt-BR');

        })
      )
      .subscribe(data => {
          this.propositions = data;
        }
      );

    this.dashboardService.getPartiesQuantity(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.partiesQuantityFixed = this.partiesQuantity.map(value => [value[0], parseInt(value[1])]);

        })
      )
      .subscribe(data => {
          this.partiesQuantity = data;
        }
      );
  }

  // getSecondTab(values: number[]) {
  //
  //   let stackBarBody = new StackBarBody(values[0].toString(), values[1].toString(), this.selectedTopicsList);
  //
  //   this.controlStackChart = false;
  //   this.totalPropositions2 = '0';
  //
  //   this.topicStackedChartModel = new StackedPieChartModel();
  //   this.topicStackedChartModelMandate = new StackedPieChartModel();
  //   let years = [];
  //   let startyear = values[0];
  //   let endyear = values[1];
  //
  //   this.dashboardService.getTopicByYear2(stackBarBody)
  //     .pipe(
  //       finalize(() => {
  //         this.topicStackedChartModel = this.topicStackedChart;
  //         this.topicStackedChartModelMandate = this.topicStackedChartMandate;
  //
  //         const topics = this.topicStackedChartModel.topicQuantity.length;
  //         let total = 0;
  //         let value = 0;
  //         for (let i = 0; i < topics; i++) {
  //           // tslint:disable-next-line:prefer-for-of
  //           for (let j = 0; j < this.topicStackedChartModel.years.length; j++) {
  //             value = parseInt(this.topicStackedChartModel.topicQuantity[i].data[j]);
  //             total = total + value;
  //           }
  //         }
  //         this.totalPropositions2 = total.toLocaleString('pt-BR');
  //       })
  //     )
  //     .subscribe(data => {
  //         this.topicStackedChart = data[0];
  //         this.topicStackedChartMandate = data[1];
  //       }
  //     );
  //
  //   // this.dashboardService.getTopicByMandate(stackBarBody)
  //   //   .pipe(
  //   //     finalize(() => {
  //   //       this.topicStackedChartModelMandate = this.topicStackedChartMandate;
  //   //     })
  //   //   )
  //   //   .subscribe(data => {
  //   //       this.topicStackedChartMandate = data;
  //   //     }
  //   //   );
  //
  // }

  getThirdTab(values: number[]) {

    this.bubbleChartTopicByMandateModel = new BubbleChartInfo();
    this.bubbleChartTopicByMandateInverseModel = new BubbleChartInfo();

    this.dashboardService.getBubbleChartMandate()
      .pipe(
        finalize(() => {
          this.bubbleChartTopicByMandateModel = this.bubbleChartTopicByMandate;

        })
      )
      .subscribe(data => {
          this.bubbleChartTopicByMandate = data;
        }
      );


    this.dashboardService.getStackedPieChartMandate()
      .pipe(
        finalize(() => {
          this.topicStackedChartModelMandate = this.topicStackedChartMandate;

        })
      )
      .subscribe(data => {
          this.topicStackedChartMandate = data;
        }
      );

    // this.dashboardService.getBubbleChartMandateInverse()
    //   .pipe(
    //     finalize(() => {
    //       this.bubbleChartTopicByMandateInverseModel = this.bubbleChartTopicByMandateInverse;
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.bubbleChartTopicByMandateInverse = data;
    //     }
    //   );
  }

  getDataTypes(values: number[]) {
    this.controlStackChart = false;
    this.controlBubbleChart = true;


    this.propositionsPie = [];
    this.partiesQuantityFixed = [];
    this.topicStackedChartModel = new StackedPieChartModel();
    let years = [];
    let startyear = values[0];
    let endyear = values[1];

    // this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
    //   .pipe(
    //     finalize(() => {
    //       this.topicStackedChartModel = this.topicStackedChart;
    //       this.controlStackChart = true;
    //       this.controlBubbleChart = false;
    //       console.log(this.topicStackedChartModel);
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.topicStackedChart = data;
    //     }
    //   );

    // this.dashboardService.getTopicByMandate()
    //   .pipe(
    //     finalize(() => {
    //       this.topicStackedChartModelMandate = this.topicStackedChartMandate;
    //       console.log(this.topicStackedChartModelMandate);
    //       this.controlStackChart = true;
    //       this.controlBubbleChart = false;
    //     })
    //   )
    //   .subscribe(data => {
    //       this.topicStackedChartMandate = data;
    //     }
    //   );

    // this.dashboardService.getBubbleChartMandate()
    //   .pipe(
    //     finalize(() => {
    //      this.bubbleChartTopicByMandateModel = this.bubbleChartTopicByMandate;
    //       this.controlBubbleChart = true;
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.bubbleChartTopicByMandate = data;
    //     }
    //   );
    //
    // this.dashboardService.getBubbleChartMandateInverse()
    //   .pipe(
    //     finalize(() => {
    //       this.bubbleChartTopicByMandateInverseModel = this.bubbleChartTopicByMandateInverse;
    //       console.log(this.bubbleChartTopicByMandateInverseModel);
    //       this.controlBubbleChart = true;
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.bubbleChartTopicByMandateInverse = data;
    //     }
    //   );

    // this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
    //   .pipe(
    //     finalize(() => {
    //       this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));
    //
    //       let total = 0;
    //       for (let i = 0; i < this.propositions.length; i++) {
    //
    //         total = total + this.propositions[i].quantity;
    //       }
    //
    //       this.totalPropositions = total.toLocaleString('pt-BR');
    //
    //       this.controlPie = true;
    //       console.log(this.propositionsPie);
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.propositions = data;
    //     }
    //   );
    //
    // this.dashboardService.getPartiesQuantity(startyear.toString(), endyear.toString())
    //   .pipe(
    //     finalize(() => {
    //       this.partiesQuantityFixed = this.partiesQuantity.map(value => [value[0], parseInt(value[1])]);
    //       this.controlDonut = true;
    //       // this.propositionsPieParties = this.partiesQuantity.map(value => ({name: value[0], y: parseInt(value[1])}));
    //       this.donutChartYear = parseInt('2019');
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.partiesQuantity = data;
    //     }
    //   );

  }
}
