import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('collapse', {static: false}) collapse: ElementRef;

  partnerConfig = {
    slidesToShow: 4,
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

  partner = [
    {
      description: `Metamor-
      phosis`,
      description_2: `An organisation that
      seeks to empower 
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Sportz Village`,
      description_2: `A platform that focuses on 
      aspects of physical education`,
      link: `https://www.sportzvillage.com/schools/ `
    },
    {
      description: `Furtados
      School Of
      Music`,
      description_2: `One of  largest
      music educators of India`,
      link: `https://furtadosschoolofmusic.com`
    },
    {
      description: `Yardstick`,
      description_2: `Learning programs that
      enhance  child's experience`,
      link: ` http://www.yardstickedu.com`
    },
    {
      description: `NumberNagar`,
      description_2: `An integrated program for Maths,
      Science and English`,
      link: `https://www.numbernagar.com/`
    },
    {
      description: `Creya Learning`,
      description_2: `An organisation that helps 
      children become inventors and innovators`,
      link: `https://www.creyalearning.com/stem/`
    },
    {
      description: `Book room from Scholastic`,
      description_2: `Organising your books`,
      link: `http://teacher.scholastic.com/products/leveledbookrooms/index.htm`
    }
  ];

  banner = [
    {
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];

  slideConfig = {
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
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };


  admissionConfig = {
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
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(private router: Router, private renderer: Renderer2) {
    
  }

  isOpen = true;
  drowDownToggle() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.collapse.nativeElement, 'test');
  }
  ngOnInit(){
    
  }

  admission = [
    {
      icon: '#icon_reading',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_education',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_emoDev',
      description: `Nurturing a
Progressive
Mindset`,
    },
    {
      icon: '#icon_reading',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_education',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_emoDev',
      description: `Nurturing a
Progressive
Mindset`,
    }
  ];


  notify = [
    {
      title: 'Vision',
      col: 'col-lg-5 col-md-5',
      description: 'Our vision is to raise, our ‘shs Pride’ to live ir dreams as a generation who are:',
      moreInfo: [
        { info: 'Resilient and Confident lifelong learners' },
        { info: 'Agile and auntic individuals' },
        { info: 'Innovative and intuitive changemakers' },
        { info: 'Socially responsible and humble global citizens' },
        { info: 'Empatic and humane souls who uphold integrity above all' }
      ]
    },
    {
      title: 'Mission',
      col: 'col-lg-4 col-md-4',
      description: `Our students will be equipped to meet  current and future challenges with
      values of
      `,
      moreInfo: [
        { info: 'Resilience' },
        { info: 'Agility' },
        { info: 'Integrity' },
        { info: 'Social responsibility' },
        { info: 'Empathy' },
      ]
    },
  ];

  solution = [
    {
      description: `Comprehensive Development`,
      icon: '#icon_termDevelopment'
    },
    {
      description: `Communication and
      Vocational Training`,
      icon: '#icon_commTrainning'
    },
    {
      description: `Performing Arts`,
      icon: '#icon_art'
    },
    {
      description: `Sports`,
      icon: '#icon_tophy'
    },
    {
      description: `Health and Fitness`,
      icon: '#icon_health'
    },
    {
      description: `Emotional Development`,
      icon: '#icon_emoDev'
    },
  ];

  testimonials = [
    {
      clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
      clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
      clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
      clientName: `Sweta D.S
      Parent of Sanketh D.S`,
      desti: 'Grade 2'
    },
    {
      clientView_1: `I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  `,
      clientView_2: `Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. `,
      clientView_3: `I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.`,
      clientName: `Sushma Panyam 
      Parent of Nihal Singaraju`,
      desti: 'Grade 2'
    },
    {
      clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
      clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
      clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
      clientName: `Sweta D.S
      Parent of Sanketh D.S`,
      desti: 'Grade 2'
    },
    {
      clientView_1: `I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  `,
      clientView_2: `Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. `,
      clientView_3: `I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.`,
      clientName: `Sushma Panyam 
      Parent of Nihal Singaraju`,
      desti: 'Grade 2'
    },
    {
      clientView_1: 'SHS VIDYALAYA  is  kind of school I was looking for my kid- a perfect balance of curriculum and sports.  school has got all  required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained  same way in  coming years without compromising on quality. Parent relationship is good I should say.',
      clientView_2: ' I like  involvement of school staff with  kids as y make  children comfortable. Principal and  management are making sure  kids, as well as  parents, feel confident about  school which is a good sign and we understand this is  first academic year for shs.',
      clientView_3: ' We foresee that this will be one of  best school in Hyderabad. All  best and look forward to seeing  school grow in strength and bustling with students at  campus soon..',
      clientName: `Sweta D.S
      Parent of Sanketh D.S`,
      desti: 'Grade 2'
    },
    {
      clientView_1: `I've always believed in holistic education and when I met with academicians at shs, that's what seemed to be ir plan. Some of  values that y talk about are very similar to  ones I try to inculcate as a professional and parent.  `,
      clientView_2: `Knowing that my child will be exposed to sports and music at a very young age is comforting. se engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. `,
      clientView_3: `I firmly believe that this tends to impact ir attitude in real life social situations too. Although my journey with shs started only about a month back, I see m do ir best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay  foundation of ir happy lives toger.`,
      clientName: `Sushma Panyam 
      Parent of Nihal Singaraju`,
      desti: 'Grade 2'
    },
  ];

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  shsnLeague = [
    {
      name: 'MS. MALINI PAUL',
      post: 'HEADMISTRESS',
      desc: `Facilitator, Visionary, educationist
30+ Years of experience` },
    {
      name: 'MS. TRUPTI RAO',
      post: 'PRINCIPAL',
      desc: `Educator, Teacher, Achiever
 21+ Years of experience
19 years at Meridian` },
    {
      name: 'MS. RUBINA MAJID',
      post: 'SOCIETY PRESIDENT',
      desc: `IITian
Renowned
Business Icon`
    },
    //     {
    //       name:'SHRI PRADEEP REDDY',
    //       post:'SOCIETY PRESIDENT',
    //       desc:`IITian
    // Renowned
    // Business Icon` },
    //     {
    //       name:'MS. TRUPTI RAO',
    //       post:'PRINCIPAL',
    //       desc:`Educator, Teacher, Achiever
    // 21+ Years of experience
    // 19 years at Meridian` },
    //     {
    //       name:'MS. MALINI PAUL',
    //       post:'HEADMISTRESS',
    //       desc:`Facilitator, Visionary, educationist
    // 30+ Years of experience` },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  knowMore = function(text) {
    if (text === 'culture') {
      this.router.navigateByUrl('/shsCulture', { skipLocationChange: true });
    } else if (text === 'edge') {
      this.router.navigateByUrl('/shsEdge', { skipLocationChange: true });
    } else if (text === 'apply') {
      this.router.navigateByUrl('/JoinshsPride', { skipLocationChange: true });
    } else if (text === 'admission') {
      this.router.navigateByUrl('/JoinshsPride', { skipLocationChange: true });
    }
  };

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}

