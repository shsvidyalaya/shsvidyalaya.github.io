import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss']
})
export class BlobComponent implements OnInit {
  constructor() { }

  admission = [
    {
      date: '2nd May 2020',
      title: `World for all
      and all for 
      world!`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    },
    {
      date: '2nd May 2020',
      title: `Gaming
      Addiction or
      Enthusiasm`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    },
    {
      date: '2nd May 2020',
      title: `Developing
      language Across
       Curriculum`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    },
    {
      date: '2nd May 2020',
      title: `World for all
      and all for 
      world!`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    },
    {
      date: '2nd May 2020',
      title: `Gaming
      Addiction or
      Enthusiasm`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    },
    {
      date: '2nd May 2020',
      title: `Developing
      language Across
       Curriculum`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in  best way possible.
      After putting toger  best of schools and undergoing immense research, re were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into SHS VIDYALAYA .
      `,
    }
  ];


  recentConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  };


  ngOnInit() {
  }

}
