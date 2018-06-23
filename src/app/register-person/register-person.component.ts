import { RPersonnel } from './../models/RPersonnel';
import { ResourcePersonnelService } from './../services/resource-personnel.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent {

  private linkCV: string;

  constructor(private resourcePersonnelService: ResourcePersonnelService, private elem: ElementRef) { }

  submitRegister(registerForm) {

    console.log(this.linkCV);
    this.resourcePersonnelService.addResourcePersonnel(registerForm, this.linkCV);
  }


  public uploadFile(): void {
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let email = this.elem.nativeElement.querySelector('#inputEmail').value;

    console.log(email);
    
    let formData = new FormData();
    let file = files[0];
    formData.append('selectFile', file, file.name);
    this.resourcePersonnelService.uploadFile(formData).subscribe(res => this.linkCV = res);
  }


}
