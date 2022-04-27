import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { AboutS1Component } from './about-s1/about-s1.component';
import { AboutS2Component } from './about-s2/about-s2.component';
import { AboutS3Component } from './about-s3/about-s3.component';
import { AboutS4Component } from './about-s4/about-s4.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutS1Component,
    AboutS2Component,
    AboutS3Component,
    AboutS4Component
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
