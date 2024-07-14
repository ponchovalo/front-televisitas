import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'televisitas',
    loadChildren: () => import('./televisitas/televisitas.module').then(m => m.TelevisitasModule)
  },
  {
    path: '**',
    redirectTo: 'televisitas'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
