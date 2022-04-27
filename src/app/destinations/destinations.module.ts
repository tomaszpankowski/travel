import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations/destinations.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DestinationsComponent,
    SidebarComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule
  ]
})
export class DestinationsModule { }
