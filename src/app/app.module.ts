import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountDown } from "../../node_modules/angular2-simple-countdown/countdown";
import { DataTableModule } from 'angular5-data-table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeTalkListComponent } from './home-talk-list/home-talk-list.component';
import { HomeResourcePersonnelListComponent } from './home-resource-personnel-list/home-resource-personnel-list.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { FooterComponent } from './footer/footer.component';
import { ViewResourcePersonnelListComponent } from './view-resource-personnel-list/view-resource-personnel-list.component';
import { ResourcePersonnelService } from './services/resource-personnel.service';
import { ViewPastTalkComponent } from './view-past-talk/view-past-talk.component';
import { PastTalkService } from './services/past-talk.service';


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
    FooterComponent,
    ViewResourcePersonnelListComponent,
    ViewPastTalkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'register', component: RegisterPersonComponent },
        { path: 'view-past-talk/:id', component: ViewPastTalkComponent },
        
        { path: 'admin/view-resource-personnel-list', component: ViewResourcePersonnelListComponent },
      ]
    ),
    NgbModule.forRoot(),
    DataTableModule.forRoot(),
  ],
  providers: [ResourcePersonnelService, PastTalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
