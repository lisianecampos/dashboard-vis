import { Injectable } from '@angular/core';
import {MatSelectionList} from '@angular/material/list';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Propositions} from '../models/Propositions';
import {TypeQuantity} from '../models/TypeQuantity';

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


  public getPropositions(ano: string,): Observable<TypeQuantity[]> {

    let params = new HttpParams();

    if (!!ano) {
      params = params.append('years', ano)
    }

    this.options.params = params;
    return this.httpClient.get<TypeQuantity[]>(this.apiUrl, this.options);
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
