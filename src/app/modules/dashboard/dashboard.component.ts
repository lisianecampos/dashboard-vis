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
  dateValues: number[] = [];
  partiesQuantity: string[][] = [];
  partiesQuantityFixed: any[][] = [];
  donutChartYear: number = 2021;

  topicStackedChart: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModel: StackedPieChartModel = new StackedPieChartModel();

  color: String = "red";
  control: boolean = false;
  sideBarOpened = false;
  modalShow = false;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

    console.log("stack" + this.controlStackChart);
    this.getDataTypes([2020, 2020]);
    this.dateValues = [2020, 2020];
  }

  addFilter(): void {
    this.modalShow = !this.modalShow;
  }

  getDataTypes(values: number[]) {
    this.controlPie = false;
    this.controlDonut = false;
    this.controlStackChart = false;
    this.propositionsPie = [];
    this.partiesQuantityFixed = [];
    this.topicStackedChartModel = new StackedPieChartModel();
    let years = [];
    let startyear = values[0];
    let endyear = values[1];

    this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          console.log(this.topicStackedChart);
          this.topicStackedChartModel = this.topicStackedChart;
          this.controlStackChart = true;
        })
      )
      .subscribe(data => {
          this.topicStackedChart = data;
        }
      );

    this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));
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
