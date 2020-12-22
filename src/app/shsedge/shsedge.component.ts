import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shsnedge',
  templateUrl: './shsedge.component.html',
  styleUrls: ['./shsedge.component.scss']
})
export class shsedgeComponent implements OnInit, AfterViewInit {

  explicitConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
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

  explicit = [{
    title: `Literacy`,
    icon: `#icon_ethicalEdu`,
    bar: '01',
    description: `Having introduced a matic and literacy-based curriculum, shs  has a
    levelled book room – a shared reading resource for successful whole-school learning, to
    designate  importance of guided reading and journal writing in our teachings.`,
    },
    {
      title: 'Mamatics',
      icon: `#icon_mamatics`,
      bar: '02',
      description: ` idea of introducing concepts for  application of mamatical terms in
      multiple, yet simple ways, serves as a strong base for future calculations with logic.
      shs conceptualizes Mamatics in a well- researched, sequential series, enabling
      children to think out of  box and relate numeracy to everyday life. Topics are introduced
      using well-planned activities, developing mamatical thinking and problem-solving skills.
     `,
    },
    {
      title: ' World (Experiential Learning)',
      icon: `#icon_worldEqu`,
      bar: '03',
      description: `Experiential learning is a process through which
      students develop knowledge, skills, and values from direct experiences outside a traditional
      academic setting. Experiential learning encompasses a variety of activities, hands-on
      learning, etc. Students can understand concepts with concrete experience and reflective
      observation.`,
    },
    {
      title: 'Expressive Arts and Design',
      icon: `#icon_expressiveArt`,
      bar: '04',
      description: `shs helps children develop ir imagination so y can
      express ir ideas in a variety of individual ways within a stimulating learning
      environment. Expressive arts and design are intended to support learning and development for
      children.`,
    },
    {
      title: 'Technology and Innovations Lab',
      icon: `#icon_techinnvo`,
      bar: '05',
      description: `Our literacy-based curriculum emphasizes subjects through
      an inquiry-based, matic, hands-on learning, driven by  goal of closely aligning
      programs that students will experience in and beyond  classroom. In today’s scenario
      where content knowledge is interconnected, our STREAM- Labs, mapped with  curriculum, are
      meticulously planned to deliver and enhance  learning process at shs.`,
    }
  ];


  ngOnInit() {
  }

  ngAfterViewInit(){

  }

}
