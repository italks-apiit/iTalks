import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RPersonnel } from '../models/RPersonnel';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class ResourcePersonnelService {

  private apiURL = "http://bitehunter.vimly.ml/iTalks/rest/resource-personnels/";

  constructor(private http: HttpClient) { }

  getAllResourcePersonnels(): Observable<RPersonnel[]> {
    return this.http.get<RPersonnel[]>(this.apiURL);
  } 


}
