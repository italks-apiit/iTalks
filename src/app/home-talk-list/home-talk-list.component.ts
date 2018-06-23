import { ResourcePersonnelService } from './../services/resource-personnel.service';
import { Component, OnInit } from '@angular/core';
import { RPersonnel } from '../models/RPersonnel';

@Component({
  selector: 'home-talk-list',
  templateUrl: './home-talk-list.component.html',
  styleUrls: ['./home-talk-list.component.css']
})
export class HomeTalkListComponent implements OnInit {

  resourcePersonnelList: RPersonnel[] = [];

  constructor(private resourcePersonnelService: ResourcePersonnelService) { }

  ngOnInit() {
    this.resourcePersonnelService.getAllResourcePersonnels()
    .subscribe(data => {
      this.resourcePersonnelList = data;
      console.log(data);
    });
  }

}
