import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './layouts/primary/primary.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: PrimaryComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: '**',
        redirectTo: 'home-page'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelevisitasRoutingModule { }
