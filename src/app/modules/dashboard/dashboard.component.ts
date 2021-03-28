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

  topicStackedChart: StackedPieChartModel = new StackedPieChartModel();
  topicStackedChartModel: StackedPieChartModel = new StackedPieChartModel();

  control: boolean = false;
  sideBarOpened = false;
  modalShow = false;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

  }

  addFilter(): void {
    this.modalShow = !this.modalShow;
  }

  getDataTypes(values: number[]) {
    this.propositionsPie = [];
    let years = [];
    let startyear = values[0];
    let endyear = values[1];

    this.dashboardService.getPropositions(startyear.toString(), endyear.toString())
      .pipe(
        finalize(() => {
          this.propositionsPie = this.propositions.map(value => ({name: value.type, y: value.quantity}));
          console.log(this.propositionsPie);

          this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
            .pipe(
              finalize(() => {
                // this.propositionsPie = this.propositions.map(value => ({ name: value.type, y: value.quantity} ));
                console.log(this.topicStackedChart);
                this.topicStackedChartModel = this.topicStackedChart;
              })
            )
            .subscribe(data => {
                this.topicStackedChart = data;
              }
            );

        })
      )
      .subscribe(data => {
          this.propositions = data;
        }
      );
  }

  // getDataTopic(values: number[]) {
  //
  //   let startyear = values[0];
  //   let endyear = values[1];
  //
  //   this.dashboardService.getTopicByYear(startyear.toString(), endyear.toString())
  //     .pipe(
  //       finalize(() => {
  //        // this.propositionsPie = this.propositions.map(value => ({ name: value.type, y: value.quantity} ));
  //         console.log(this.topicStackedChart);
  //
  //       })
  //     )
  //     .subscribe(data => {
  //         this.topicStackedChart = data;
  //       }
  //     );
  //
  //
  // }

  sideBarToggled($event: any): void {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
