import { SetoresModule } from './../components/setores/setores.module';
import { ProdutosModule } from './../components/produtos/produtos.module';
import { CadastrosModule } from './../components/cadastros/cadastros.module';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';
import { SwitchsCrudComponent } from './switchs-crud/switchs-crud.component';
import { SetoresCrudComponent } from './setores-crud/setores-crud.component';
import { ProdutoSaidaCrudComponent } from './produto-saida-crud/produto-saida-crud.component';
import { PrintsCrudComponent } from './prints-crud/prints-crud.component';
import { MonitorCrudComponent } from './monitor-crud/monitor-crud.component';
import { HomeComponent } from './home/home.component';
import { EquipamentosCrudComponent } from './equipamentos-crud/equipamentos-crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCrudComponent } from './cadastroPessoas-crud/cadastro-crud.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CadastroCrudComponent,
    EquipamentosCrudComponent,
    HomeComponent,
    MonitorCrudComponent,
    PrintsCrudComponent,
    PrintsCrudComponent,
    ProdutoSaidaCrudComponent,
    SetoresCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    CadastrosModule,
    ProdutosModule,
    SetoresModule,
    MatButtonModule
  ],
  exports:[
    CadastroCrudComponent,
    EquipamentosCrudComponent,
    HomeComponent,
    MonitorCrudComponent,
    PrintsCrudComponent,
    PrintsCrudComponent,
    ProdutoSaidaCrudComponent,
    SetoresCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent,
   
  ]
})
export class ViewsModule { }
