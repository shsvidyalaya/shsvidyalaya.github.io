import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor() { }
  moreInfo = [
    { info : 'Please fill out and submit  Inquiry Form on our website'},
    { info : 'Visit our school campus or Contact our Admissions office'},
    { info : 'Complete and submit  Application for Admission Form when you visit our school.'},
    { info : 'Once you have completed  application, we will schedule a brief parent interview and an assessment for your child '},
    { info : 'Once accepted, we will complete  admissions and payment procedure'}
  ];
  ngOnInit() {
  }

}
