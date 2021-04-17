import { Injectable } from '@angular/core';
import {MatSelectionList} from '@angular/material/list';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Propositions} from '../models/Propositions';
import {TypeQuantity} from '../models/TypeQuantity';
import {StackedPieChartModel} from '../models/StackedPieChartModel';
import {BubbleChartInfo} from '../models/BubbleChartInfo';
import {StackBarBody} from '../models/StackBarBody';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = 'http://localhost:8080/propositions/types';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  options = { params: new HttpParams() };

  constructor(private httpClient: HttpClient) {}


  public getPropositions(start: string, end: string): Observable<TypeQuantity[]> {

    let params = new HttpParams();

    if (!!start) {
      params = params.append('start', start)
    }
    if (!!end) {
      params = params.append('end', end)
    }

    this.options.params = params;
    return this.httpClient.get<TypeQuantity[]>('http://localhost:8080/propositions/types', this.options);
  }

  public getPartiesQuantity(start: string, end: string): Observable<string[][]> {

    let params = new HttpParams();

    if (!!start) {
      params = params.append('start', start)
    }
    if (!!end) {
      params = params.append('end', end)
    }

    this.options.params = params;
    return this.httpClient.get<string[][]>('http://localhost:8080/propositions/partiesQuantity', this.options);
  }

  public getTopicByYear(body: StackBarBody): Observable<StackedPieChartModel> {

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.put<StackedPieChartModel>('http://localhost:8080/propositions/stack-bar', body);
  }

  public getTopicByMandate(body: StackBarBody): Observable<StackedPieChartModel> {

    return this.httpClient.put<StackedPieChartModel>('http://localhost:8080/propositions/stack-bar-mandate', body);
  }

  public getBubbleChartMandate(): Observable<BubbleChartInfo> {

    return this.httpClient.get<BubbleChartInfo>('http://localhost:8080/propositions/bubble-chart-mandate');

  }

  public getBubbleChartMandateInverse(): Observable<BubbleChartInfo> {

    return this.httpClient.get<BubbleChartInfo>('http://localhost:8080/propositions/bubble-chart-mandate-inverse');

  }

  // }
  // tslint:disable-next-line:typedef
  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards(): number[] {
    return [50, 78, 66, 79];
  }
}
