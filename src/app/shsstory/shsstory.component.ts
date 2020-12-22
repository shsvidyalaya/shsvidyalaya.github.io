import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shsnstory',
  templateUrl: './shsstory.component.html',
  styleUrls: ['./shsstory.component.scss']
})
export class shsstoryComponent implements OnInit {

  constructor() { }

  story = [
    {
      icon: '#icon_termDevelopment',
      description: `Comprehensive
      Development`,
    },
    {
      icon: '#icon_commTrainning',
      description: `Communication
      and vocational
      training`,
    },
    {
      icon: '#icon_art',
      description: `Performing
      arts`,
    }
  ];

  ngOnInit() {
  }

}
