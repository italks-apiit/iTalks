import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  time: string
  imageUrl: string

  text: any = {
    "Weeks": "Weeks",
    "Days": "Days", 
    "Hours": "Hours",
    "Minutes": "Minutes", 
    "Seconds": "Seconds"
  };

  constructor() {
    this.time = "July 22, 2020";
    this.imageUrl = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg";
  }

  ngOnInit() {
  }

}
