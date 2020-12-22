import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  socialNet = [
    {icon: '#icon_facebook'},
    {icon: '#icon_instagram'},
    {icon: '#icon_twitter'}
  ];

  ngOnInit() {
  }

}
