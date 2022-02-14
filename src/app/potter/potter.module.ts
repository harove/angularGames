import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotterRoutingModule } from './potter-routing.module';
import { PotterComponent } from './potter.component';


@NgModule({
  declarations: [
    PotterComponent
  ],
  imports: [
    CommonModule,
    PotterRoutingModule
  ]
})
export class PotterModule { }
