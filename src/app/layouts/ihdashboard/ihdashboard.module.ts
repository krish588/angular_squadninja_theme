import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { IhDashboardRoutes } from './ihdashboard-routing.module';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IhdashboardcardsComponent } from 'src/app/pages/ihdashboardcards/ihdashboardcards.component';
import { IhprofileComponent } from 'src/app/pages/ihprofile/ihprofile.component';



@NgModule({
  declarations: [
    IhdashboardcardsComponent,
    IhprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IhDashboardRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    ClipboardModule
  ]
})
export class IhdashboardModule { }
