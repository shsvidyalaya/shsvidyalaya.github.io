import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('notify', { static: true }) content: TemplateRef<any>;

  ngOnInit() {
    this.modalService.open(this.content, { size: 'lg', windowClass: 'notification-popup' });
  }


  showNavigationIndicators = false;
  showNavigationArrows = false;

  isOpen = true;
  isSlideOpen = true;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };


  list;
  managedService;
  managedServiceSoftEng;

  closeResult = '';

  constructor(private modalService: NgbModal, private router: Router) {
    this.list = [
        {name: 'Home'},
        {name: 'shsStory'},
        {name: 'shsLeague'},
        {name: 'shsCulture'},
        {name: 'shsEdge'},
        {name: 'JoinshsPride'},
        {name: 'shsCorner'},
        {name: 'CatchUpOverCoffee'}
        // {name: 'Eng'},
        //{name: 'HowToApply'},
    ];
  }

   open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    notifyOpen(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'notification-popup'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openlogin(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'sign'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }



  slideToggel() {
    const body = document.getElementsByTagName('body')[0];
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      body.classList.add('remove-scroll');
    } else {
      body.classList.remove('remove-scroll');
    }
  }

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

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  knowMore = function(text) {
    if (text === 'admission') {
      this.router.navigateByUrl('/JoinshsPride', {skipLocationChange: true});
      this.modalService.dismissAll();
    }};
}
