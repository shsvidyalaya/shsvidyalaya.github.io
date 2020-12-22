import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'shs';

  constructor(private router: Router) {

    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url === '/') {
                this.router.navigate(['/Home'], {skipLocationChange: true});
            }
        }
        if (this.router.url === '/Home') {
          document.body.classList.add('main-page');
        } else {
          document.body.classList.remove('main-page');
        }
    });
}

knowMore = function(text) {
  if(text == 'culture'){
    this.router.navigateByUrl('/StudyCulture', {skipLocationChange: true});
  }else if(text == 'edge'){
    this.router.navigateByUrl('/shsnEdge', {skipLocationChange: true});
  }

};

ngOnInit() {
  AOS.init();
}
}
