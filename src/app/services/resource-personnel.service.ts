import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RPersonnel } from '../models/RPersonnel';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class ResourcePersonnelService {

  private apiURL = "http://bitehunter.vimly.ml/iTalks/rest/resource-personnels/";

  constructor(private http: HttpClient) { }

  getAllResourcePersonnels(): Observable<RPersonnel[]> {
    return this.http.get<RPersonnel[]>(this.apiURL);
  }

  addResourcePersonnel(registerForm, linkCV: string) {

    let data = {
      First_Name: registerForm.inputFirstName,
      Last_Name: registerForm.inputLastName,
      Current_Role: registerForm.inputCurrentRole,
      Email: registerForm.inputEmail,
      CV_Link: linkCV,
    };

    this.http.post(this.apiURL, data).subscribe(data => console.log(data));
  }


  public uploadFile(formdata: any) {
    let _url: string = 'http://bitehunter.vimly.ml/iTalks/rest/fileUpload.php';
    return this.http.post(_url, formdata)
      .catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');

  }

}
