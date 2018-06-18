import { ResourcePersonnelService } from './../services/resource-personnel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableResource, DataTable } from 'angular5-data-table';
import { RPersonnel } from '../models/RPersonnel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'view-resource-personnels',
  templateUrl: './view-resource-personnels.component.html',
  styleUrls: ['./view-resource-personnels.component.css']
})
export class ViewResourcePersonnelsComponent implements OnInit {

  items: RPersonnel[] = [];
  itemCount: number;
  tableResource: DataTableResource<RPersonnel>;
  @ViewChild(DataTable) rPersonnelTable: DataTable;


  constructor(private resourcePersonnelService: ResourcePersonnelService) { }

  ngOnInit() {
    this.resourcePersonnelService.getAllResourcePersonnels()
      .subscribe(data => {
        this.items = data;
        this.initializeTable(data);
      });
  }

  initializeTable(rPersonnels: RPersonnel[]) {

    this.tableResource = new DataTableResource(rPersonnels);
    this.tableResource.query({ offset: 0 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params).then(items => this.items = items);
  }

}
