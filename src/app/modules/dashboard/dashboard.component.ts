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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  propositions: TypeQuantity[] = [];
  propositionsPie: {name: string; y: number}[] = [];
  control: boolean = false;
  sideBarOpened = false;
  modalShow = false;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

  }

  addFilter(): void {
    // const dialogRef = this.dialog.open(FilterModalComponent, {
    //   width: '250px'
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('closed');
    // });
    this.modalShow = !this.modalShow;
  }
  //recebe os anos como array de string e transforma em string separados por vírgula
  getData(values: number[]){
    this.propositionsPie = [];
    let years = [];
    let startyear = values[0];
    let endyear = values[1];
    let yearsParam = startyear + '';
    let limit = endyear - startyear;
    for (let i = startyear; i <= endyear; i++) {
      years.push(i);
    }
    for (let i = 1; i < years.length; i++) {
      yearsParam = yearsParam + ',' + years[i];
    }

    this.dashboardService.getPropositions(yearsParam)
      .pipe(
        finalize(() => {
          this.propositionsPie = this.propositions.map(value => ({ name: value.type, y: value.quantity} ));
          console.log(this.propositionsPie);

          })
      )
      .subscribe(data => {
          this.propositions = data;
        }
      );

  }

  sideBarToggled($event: any): void {
    this.sideBarOpened = !this.sideBarOpened;
  }

  // faz a chamada enquanto ainda houver páginas
  //  getPropositions(years: string, pagina: number, tipo: string): number {
  //   let pieSlice = new PieValues();
  //
  //   this.dashboardService.getPropositions(years, tipo, pagina.toString())
  //     .pipe(
  //       finalize(() => {
  //
  //       })
  //     )
  //     .subscribe(data => {
  //         this.propositions = this.propositions.concat(data.dados);
  //
  //         if (data.dados.length !== 0) {
  //           pagina = pagina + 1;
  //           return this.getPropositions(years, pagina, tipo);
  //         }
  //         else {
  //          // console.log(this.propositions.length);
  //           this.control = true;
  //           return this.propositions.length;
  //         }
  //       }
  //     );
  //   return this.propositions.length;
  // }

  // // faz a chamada enquanto ainda houver páginas
  // getPropositions(years: string, pagina: number, tipo: string): number {
  //   let pieSlice = new PieValues();
  //
  //   this.dashboardService.getPropositions(years, tipo, pagina.toString())
  //     .pipe(
  //       finalize(() => {
  //
  //       })
  //     )
  //     .subscribe(data => {
  //         this.propositions = this.propositions.concat(data.dados);
  //
  //         if (data.dados.length !== 0) {
  //           pagina = pagina + 1;
  //           return this.getPropositions(years, pagina, tipo);
  //         }
  //         else {
  //           // console.log(this.propositions.length);
  //           this.control = true;
  //           return this.propositions.length;
  //         }
  //       }
  //     );
  //   return this.propositions.length;
  // }
}
