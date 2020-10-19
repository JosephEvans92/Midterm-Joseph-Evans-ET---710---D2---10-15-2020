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
import { ResumeLeftColumnComponent } from './resume/resume-left/resume-left.component';
import { ResumeRightColumnComponent } from './resume/resume-right/resume-right.component';
import { FooterComponent } from './resume/footer/footer.component';
import { ResumeEducationComponent } from './resume/resume-education/resume-education.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
       { path: 'products/:productId', component: ProductDetailsComponent },
       { path: 'resume', component: ResumeComponent },
        { path: 'resume-left.cloumn', component:  ResumeLeftColumnComponent },
      { path: 'resume-right.cloumn', component:  ResumeRightColumnComponent },
      { path: 'resume-education', component:  ResumeEducationComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ResumeComponent,
    ProductDetailsComponent,
    ResumeLeftColumnComponent,
    ResumeRightColumnComponent,
    FooterComponent,
    ResumeEducationComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/