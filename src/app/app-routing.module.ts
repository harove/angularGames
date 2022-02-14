import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'thrones', loadChildren: () => import('./thrones/thrones.module').then(m => m.ThronesModule) }, { path: 'potter', loadChildren: () => import('./potter/potter.module').then(m => m.PotterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
