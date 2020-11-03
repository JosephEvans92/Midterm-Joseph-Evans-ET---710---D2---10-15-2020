import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ResumeComponent } from './resume/resume.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ResumeLeftComponent } from './resume/resume-left/resume-left.component';
import { ResumeRightComponent } from './resume/resume-right/resume-right.component';
import { FooterComponent } from './resume/footer/footer.component';
import { ResumeEducationComponent } from './resume/resume-education/resume-education.component';
import { ResumeProfileComponent } from './my-resume/resume-profile/resume-profile.component';
import { ResumeWorkExperienceComponent } from './my-resume/resume-work-experience/resume-work-experience.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'left.cloumn', component:  ResumeLeftComponent },
      { path: 'right.cloumn', component:  ResumeRightComponent },
      { path: 'resume-education', component:  ResumeEducationComponent },
      { path: 'footer', component:  FooterComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ResumeComponent,
    ProductDetailsComponent,
    ResumeLeftComponent,
    ResumeRightComponent,
    FooterComponent,
    ResumeEducationComponent,
    ResumeProfileComponent,
    ResumeWorkExperienceComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/