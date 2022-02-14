import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThronesComponent } from './thrones.component';

const routes: Routes = [{ path: '', component: ThronesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThronesRoutingModule { }
