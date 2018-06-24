import { Component, OnInit, ElementRef } from '@angular/core';
import { NewResourcePersonnelService } from '../services/new-resource-personnel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent {

  private linkCV: string;

  constructor(
    private newResourcePersonnelService: NewResourcePersonnelService, 
    private elem: ElementRef,
    private toastr: ToastrService
  ) { }

  submitRegister(registerForm) {
    this.toastr.success('Hello world!', 'Toastr fun!');

    this.newResourcePersonnelService.addResourcePersonnel(registerForm, this.linkCV)
      .subscribe(data => {

        console.log(data);
        this.toastr.success('Hello world!', 'Toastr fun!');
        if(data == 1){
          this.toastr.success('Hello world!', 'Toastr fun!');
        }
        else{
          this.toastr.error("Registration Unsuccesful!");
        }
      });
  }


  public uploadFile(): void {
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let email = this.elem.nativeElement.querySelector('#inputEmail').value;

    let formData = new FormData();
    let file = files[0];
    let fileName = email + '_' + file.name;
    formData.append('selectFile', file, fileName);
    this.newResourcePersonnelService.uploadFile(formData).subscribe(res => this.linkCV = res);
  }





}
