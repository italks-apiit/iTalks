import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Talk } from '../models/Talk';

@Injectable()
export class PastTalkService {

  private apiURL = "http://bitehunter.vimly.ml/iTalks/rest/about-talk/";

  constructor(private http: HttpClient) { }

  getTalkDetails(id: number): Observable<Talk> {
    let params = new HttpParams();
    params = params.append("id", id.toString());

    return this.http.get<Talk>(this.apiURL, { params: params });
  }

}
