import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IhnavbarComponent } from './ihnavbar/ihnavbar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    IhnavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    SidebarComponent,
    IhnavbarComponent,
  ]
})
export class DashboardModule { }
