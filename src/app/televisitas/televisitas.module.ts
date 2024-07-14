import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelevisitasRoutingModule } from './televisitas-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimaryComponent } from './layouts/primary/primary.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomePageComponent,
    PrimaryComponent
  ],
  imports: [
    CommonModule,
    TelevisitasRoutingModule,
    MaterialModule
  ]
})
export class TelevisitasModule { }
