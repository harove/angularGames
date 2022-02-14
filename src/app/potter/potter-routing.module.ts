import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotterComponent } from './potter.component';

const routes: Routes = [{ path: '', component: PotterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PotterRoutingModule { }
