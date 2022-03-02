import { ProdutoSaidaCreateComponent } from './components/produto-saida/produto-saida-create/produto-saida-create.component';
import { ProdutoSaidaReadComponent } from './components/produto-saida/produto-saida-read/produto-saida-read.component';
import { EstabilizadorReadComponent } from './components/equipamentos/estabilizador/estabilizador-read/estabilizador-read.component';
import { MonitorReadComponent } from './components/equipamentos/monitores/monitor-read/monitor-read.component';
import { ComputadorReadComponent } from './components/equipamentos/computadores/computador-read/computador-read.component';
import { EquipamentosCrudComponent } from './views/equipamentos-crud/equipamentos-crud.component';
import { CadastroCreateComponent } from './components/cadastros/cadastro-create/cadastro-create';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { SwitchsCrudComponent} from './views/switchs-crud/switchs-crud.component';
import { ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { ProdutoCreateComponent} from './components/produtos/produto-create/produto-create.component';
import { CadastroCrudComponent } from './views/cadastroPessoas-crud/cadastro-crud.component';
import { LoginComponent} from './components/login/login.component'

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path:'equipamentos',
    component:EquipamentosCrudComponent
  },
  {
    path:'prints',
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
    path:"cadastro",
    component:CadastroCrudComponent
  },
  {
    path:"cadastro/created",
    component:CadastroCreateComponent
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
    path:"produto/saida/:id",
    component:ProdutoSaidaCreateComponent
  },
  // {
  //   path:"cadastro",
  //   component:CadastroCrudComponent
  // }
  {
    path:"computadores",
    component:ComputadorReadComponent
  },
  {
    path:"monitores",
    component: MonitorReadComponent
  },
  {
    path:"estabilizadores",
    component:EstabilizadorReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
