import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IhdashboardcardsComponent } from 'src/app/pages/ihdashboardcards/ihdashboardcards.component';
import { IhprofileComponent } from 'src/app/pages/ihprofile/ihprofile.component';

export const IhDashboardRoutes: Routes = [
  {path:'ihdashboardcards',component:IhdashboardcardsComponent},
  {path:'user-profile',component:IhprofileComponent}
];



