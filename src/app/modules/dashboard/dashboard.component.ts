import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {Propositions} from '../../models/Propositions';
import {PropositionModel} from '../../models/Proposition.model';
import {take, finalize} from 'rxjs/operators';
import {PieValues} from '../../models/PieValues';
import {TypeQuantity} from '../../models/TypeQuantity';
import {PieData} from '../../models/PieData';
import {MatDialog} from '@angular/material/dialog';
import {FilterModalComponent} from '../../shared/components/filter-modal/filter-modal.component';
import {TopicQuantity} from '../../models/TopicQuantity';
import {StackedPieChartModel} from '../../models/StackedPieChartModel';
import {FormControl, FormGroup} from '@angular/forms';
import {BubbleChartInfo} from '../../models/BubbleChartInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  propositions: TypeQuantity[] = [];
  propositionsPie: {name: string; y: number}[] = [];
  propositionsPieParties: {name: string; y: number}[] = [];

  controlPie: boolean = false;
  controlDonut: boolean = false;
  controlStackChart: boolean = false;
  controlBubbleChart: boolean = false;

  dateValues: number[] = [1546308000000, 1618110000000];
  partiesQuantity: string[][] = [];
  partiesQuantityFixed: any[][] = [];
  donutChartYear: number = 2021;

  totalPropositions: string = '0';

  topicStackedChart: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModel: StackedPieChartModel = new StackedPieChartModel();

  topicStackedChartMandate: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModelMandate: StackedPieChartModel = new StackedPieChartModel();

  bubbleChartTopicByMandate: BubbleChartInfo = new BubbleChartInfo();
  bubbleChartTopicByMandateModel: BubbleChartInfo = new BubbleChartInfo();

  bubbleChartTopicByMandateInverse: BubbleChartInfo = new BubbleChartInfo();
  bubbleChartTopicByMandateInverseModel: BubbleChartInfo = new BubbleChartInfo();


  color: String = "red";
  control: boolean = false;
  sideBarOpened = false;
  modalShow = false;
  range: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

    console.log("stack" + this.controlStackChart);
    this.dateValues = [1546308000000, 1618110000000];
    this.getDataTypes(this.dateValues);
  }

  addFilter(): void {
    this.modalShow = !this.modalShow;
  }

  getDataTypes(values: number[]) {
    this.controlPie = false;
    this.controlDonut = false;
    this.controlStackChart = false;
    this.controlBubbleChart = true;


    this.propositionsPie = [];
    this.partiesQuantityFixed = [];
    this.topicStackedChartModel = new StackedPieChartModel();
    let years = [];
    let startyear = values[0];
    let endyear = values[1];

    this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.topicStackedChartModel = this.topicStackedChart;
          this.controlStackChart = true;
          this.controlBubbleChart = false;
          console.log(this.topicStackedChartModel);

        })
      )
      .subscribe(data => {
          this.topicStackedChart = data;
        }
      );

    this.dashboardService.getTopicByMandate()
      .pipe(
        finalize(() => {
          this.topicStackedChartModelMandate = this.topicStackedChartMandate;
          console.log(this.topicStackedChartModelMandate);
          this.controlStackChart = true;
          this.controlBubbleChart = false;
        })
      )
      .subscribe(data => {
          this.topicStackedChartMandate = data;
        }
      );

    this.dashboardService.getBubbleChartMandate()
      .pipe(
        finalize(() => {
         this.bubbleChartTopicByMandateModel = this.bubbleChartTopicByMandate;
          this.controlBubbleChart = true;

        })
      )
      .subscribe(data => {
          this.bubbleChartTopicByMandate = data;
        }
      );

    this.dashboardService.getBubbleChartMandateInverse()
      .pipe(
        finalize(() => {
          this.bubbleChartTopicByMandateInverseModel = this.bubbleChartTopicByMandateInverse;
          console.log(this.bubbleChartTopicByMandateInverseModel);
          this.controlBubbleChart = true;

        })
      )
      .subscribe(data => {
          this.bubbleChartTopicByMandateInverse = data;
        }
      );

    this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));

          let total = 0;
          for (let i = 0; i < this.propositions.length; i++) {

            total = total + this.propositions[i].quantity;
          }

          this.totalPropositions = total.toLocaleString('pt-BR');

          this.controlPie = true;
          console.log(this.propositionsPie);

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
          this.controlDonut = true;
          // this.propositionsPieParties = this.partiesQuantity.map(value => ({name: value[0], y: parseInt(value[1])}));
          this.donutChartYear = parseInt('2019');

        })
      )
      .subscribe(data => {
          this.partiesQuantity = data;
        }
      );

//até aqui
    // this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
    //   .pipe(
    //     finalize(() => {
    //       this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));
    //       console.log(this.propositionsPie);
    //
    //       this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
    //         .pipe(
    //           finalize(() => {
    //             console.log(this.topicStackedChart);
    //             this.topicStackedChartModel = this.topicStackedChart;
    //
    //             this.dashboardService.getPartiesQuantity(startyear.toString(), endyear.toString())
    //               .pipe(
    //                 finalize(() => {
    //                   this.partiesQuantityFixed = this.partiesQuantity.map(value => [value[0], parseInt(value[1])]);
    //
    //                   // this.propositionsPieParties = this.partiesQuantity.map(value => ({name: value[0], y: parseInt(value[1])}));
    //
    //                   this.donutChartYear = parseInt('2019');
    //
    //                 })
    //               )
    //               .subscribe(data => {
    //                   this.partiesQuantity = data;
    //                 }
    //               );
    //
    //
    //           })
    //         )
    //         .subscribe(data => {
    //             this.topicStackedChart = data;
    //           }
    //         );
    //
    //     })
    //   )
    //   .subscribe(data => {
    //       this.propositions = data;
    //     }
    //   );


  }


  sideBarToggled($event: any): void {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
