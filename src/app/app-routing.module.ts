import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { studycultureComponent } from './studyculture/studyculture.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ApplyComponent } from './apply/apply.component';
import { EngComponent } from './eng/eng.component';
import { ContactComponent } from './contact/contact.component';
import { BlobComponent } from './blob/blob.component';
import { teamComponent } from './team/team.component';
import { shsedgeComponent } from './shsedge/shsedge.component';
import { shsstoryComponent } from './shsstory/shsstory.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'shsCulture', component: studycultureComponent},
  {path: 'shsStory', component: shsstoryComponent},
  {path: 'shsEdge', component: shsedgeComponent},
  {path: 'JoinshsPride', component: AdmissionsComponent},
  {path: 'HowToApply', component: ApplyComponent},
  {path: 'CatchUpOverCoffee', component: ContactComponent},
  {path: 'shsCorner', component: BlobComponent},
  {path: 'shsLeague', component: teamComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    HomeComponent,
    studycultureComponent,
    shsstoryComponent,
    shsedgeComponent,
    AdmissionsComponent,
    ApplyComponent,
    EngComponent,
    ContactComponent,
    BlobComponent,
    teamComponent
],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}