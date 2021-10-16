import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {FontSizeComponent} from "./content/font-size/font-size.component";
import {ShowPetComponent} from "./content/show-pet/show-pet.component";
import {TableBostrapComponent} from "./content/table-bostrap/table-bostrap.component";
import {ParentComponent} from "./input/parent/parent.component";
import {ParentOutputComponent} from "./content/output/parent-output/parent-output.component";
import {ParentNgonchangeComponent} from "./content/ngOnChanges/parent-ngonchange/parent-ngonchange.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'show-pet', component: ShowPetComponent},
  {path: 'table-boostrap', component: TableBostrapComponent},
  {path: 'input', component: ParentComponent},
  {path: 'output', component: ParentOutputComponent},
  {path: 'ng-onchange',component: ParentNgonchangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
