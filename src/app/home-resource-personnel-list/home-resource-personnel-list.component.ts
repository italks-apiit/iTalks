import { ResourcePersonnelService } from './../services/resource-personnel.service';
import { RPersonnel } from './../models/RPersonnel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-resource-personnel-list',
  templateUrl: './home-resource-personnel-list.component.html',
  styleUrls: ['./home-resource-personnel-list.component.css']
})
export class HomeResourcePersonnelListComponent implements OnInit {
  resourcePersonnelList: RPersonnel[] = []

  constructor(private resourcePersonnelService: ResourcePersonnelService) { }

  ngOnInit() {
    this.resourcePersonnelService.getAllResourcePersonnels()
      .subscribe(data => {
        this.resourcePersonnelList = data;
        console.log(data);
      });
  }

}
