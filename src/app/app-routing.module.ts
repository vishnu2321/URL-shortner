import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { UrlshortnerformComponent } from './urlshortnerform/urlshortnerform.component';

const routes: Routes = [
  {path:"history",component:HistoryComponent},
  {path:"home",component:UrlshortnerformComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
