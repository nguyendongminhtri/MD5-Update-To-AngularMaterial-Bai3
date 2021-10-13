import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {FontSizeComponent} from "./content/font-size/font-size.component";
import {ShowPetComponent} from "./content/show-pet/show-pet.component";
import {TableBostrapComponent} from "./content/table-bostrap/table-bostrap.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'show-pet', component: ShowPetComponent},
  {path: 'table-boostrap', component: TableBostrapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
