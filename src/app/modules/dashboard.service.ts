import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
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
}
