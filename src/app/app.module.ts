import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeTalkListComponent } from './home-talk-list/home-talk-list.component';
import { HomeResourcePersonnelListComponent } from './home-resource-personnel-list/home-resource-personnel-list.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CountDown,
    NavbarComponent,
    HomeComponent,
    HomeTalkListComponent,
    HomeResourcePersonnelListComponent,
    HomeCarouselComponent,
    RegisterPersonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'register', component: RegisterPersonComponent },
      ]
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
