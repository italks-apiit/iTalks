import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin(form) {
    //console.log(form);
    this.auth.login(this.user)
    .subscribe(data => {});
  }

}
