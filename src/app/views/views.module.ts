import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { CadastrosModule } from './../components/cadastros/cadastros.module';
import { ProdutosModule } from './../components/produtos/produtos.module';
import { SetoresModule } from './../components/setores/setores.module';
import { CadastroCrudComponent } from './cadastroPessoas-crud/cadastro-crud.component';
import { EquipamentosCrudComponent } from './equipamentos-crud/equipamentos-crud.component';
import { HomeComponent } from './home/home.component';
import { MonitorCrudComponent } from './monitor-crud/monitor-crud.component';
import { PrintsCrudComponent } from './prints-crud/prints-crud.component';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';
import { SetoresCrudComponent } from './setores-crud/setores-crud.component';
import { SwitchsCrudComponent } from './switchs-crud/switchs-crud.component';




@NgModule({
  declarations: [
    CadastroCrudComponent,
    EquipamentosCrudComponent,
    HomeComponent,
    MonitorCrudComponent,
    PrintsCrudComponent,
    PrintsCrudComponent,
    SetoresCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent
  ],
  imports: [
    CommonModule,
    CadastrosModule,
    ProdutosModule,
    SetoresModule,
    AppMaterialModule
  ],
  exports: [
    CadastroCrudComponent,
    EquipamentosCrudComponent,
    HomeComponent,
    MonitorCrudComponent,
    PrintsCrudComponent,
    PrintsCrudComponent,
    SetoresCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent,

  ]
})
export class ViewsModule { }
