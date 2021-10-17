import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ComputerCrudComponent } from './views/computer-crud/computer-crud.component';
import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { EstoqueCrudComponent } from './views/estoque-crud/estoque-crud.component';
import { SwitchsCrudComponent} from './views/switchs-crud/switchs-crud.component';
import {EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path:'computers',
    component:ComputerCrudComponent
  },
  {
    path:"prints",
    component:PrintsCrudComponent
  },
  {
    path:"setores",
    component: SetoresCrudComponent
  },
  {
    path:"estoque",
    component:EstoqueCrudComponent
  },
  {
    path:"switchs",
    component:SwitchsCrudComponent
  },
  {
    path:"estoque/created",
    component:EstoqueCreatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
