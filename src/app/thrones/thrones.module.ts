import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThronesRoutingModule } from './thrones-routing.module';
import { ThronesComponent } from './thrones.component';


@NgModule({
  declarations: [
    ThronesComponent
  ],
  imports: [
    CommonModule,
    ThronesRoutingModule
  ]
})
export class ThronesModule { }
