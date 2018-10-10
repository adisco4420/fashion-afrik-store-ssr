import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Headers, RequestOptions } from '@angular/http';
import { Globals } from '../shared/api';

@Injectable()
export class SizeService {

  private sizesUrl = this.globals.SIZES_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals) { }

  fetchSizes(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.sizesUrl, {headers})
  }

}
