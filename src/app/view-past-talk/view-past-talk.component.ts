import { Component, OnInit } from '@angular/core';
import { PastTalkService } from '../services/past-talk.service';
import { Talk } from '../models/Talk';

@Component({
  selector: 'view-past-talk',
  templateUrl: './view-past-talk.component.html',
  styleUrls: ['./view-past-talk.component.css']
})
export class ViewPastTalkComponent implements OnInit {

  constructor(private aboutTalkService: PastTalkService) { }
  talk: Talk;

  ngOnInit() {
    this.aboutTalkService.getTalkDetails(1)
      .subscribe(data => {
        this.talk = data;
        console.log(data);
      });
  }
}
