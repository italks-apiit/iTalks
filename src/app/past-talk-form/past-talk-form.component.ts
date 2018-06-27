import { Talk } from './../models/Talk';
import { RPersonnel } from './../models/RPersonnel';
import { ActiveResourcePersonnelService } from './../services/active-resource-personnel.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'past-talk-form',
  templateUrl: './past-talk-form.component.html',
  styleUrls: ['./past-talk-form.component.css']
})
export class PastTalkFormComponent implements OnInit {

  pastTalk = {};
  resourcePersonnelList: RPersonnel[] = [];
  rImage;
  selectedResourcePersonnel;
  constructor(private activeResourcePersonnelService: ActiveResourcePersonnelService) { }

  ngOnInit() {
    this.activeResourcePersonnelService.getAllResourcePersonnel()
      .subscribe(data => {
        this.resourcePersonnelList = data;
        console.log(data);
      });

    //this.pastTalk;
  }

  onSubmitPastTalk(pastTalkForm) {
    console.log(pastTalkForm);

    this.checkDate(pastTalkForm);
  }

  onResourcePersonnelChange(e) {
    let selectedPersonId = e.target.value;
    this.selectedResourcePersonnel = this.resourcePersonnelList.find(resourcePersonnel => resourcePersonnel.Person_ID == selectedPersonId);
    //console.log(this.rImage);
  }

  checkDate(pastTalkForm) {
    const dateSendingToServer = new DatePipe('en-US').transform(pastTalkForm.Date, 'yyyy-MM-dd');
    //const time = new DatePipe('en-US').transform(pastTalkForm.Time, 'HH:mm');
    console.log(dateSendingToServer);
  }

}
