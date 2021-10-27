import { SupervisorCreateComponent } from './components/supervisor/supervisor-create/supervisor-create.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ComputerCrudComponent } from './views/computer-crud/computer-crud.component';
import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { EstoqueCrudComponent } from './views/estoque-crud/estoque-crud.component';
import { SwitchsCrudComponent} from './views/switchs-crud/switchs-crud.component';
import { ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { ProdutoCreateComponent} from './components/produtos/produto-create/produto-create.component';
import { SupervisorCrudComponent } from './views/supervisor-crud/supervisor-crud.component'

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
    path:"switchs",
    component:SwitchsCrudComponent
  },
  {
    path:"pessoas",
    component:SupervisorCrudComponent
  },
  {
    path:"pessoas/created",
    component:SupervisorCreateComponent
  },
  {
    path:"estoque/created",
    component:EstoqueCreatedComponent
  },
  {
    path:"produtos",
    component:ProdutoCrudComponent
  },
  {
    path:"produto/created",
    component:ProdutoCreateComponent
  },
  {
    path:"produto/update/:id",
    component:ProdutoUpdateComponent
  },
  {
    path:"produto/delete/:id",
    component:ProdutoDeleteComponent

  },
  {
    path:"supervisor/create",
    component:SupervisorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
