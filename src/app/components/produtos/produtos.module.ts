import { ProdutoSaidaCreateComponent } from '../produto-saida/produto-saida-create/produto-saida-create.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { AppRoutingModule } from '../../app-routing.module';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [
    ProdutoReadComponent,
  
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
    SharedModule
  ],
  exports:[
    ProdutoReadComponent
  ]
})
export class ProdutosModule { }
