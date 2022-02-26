import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { AppRoutingModule } from '../../app-routing.module';
import { ProdutoReadComponent } from './produto-read/produto-read.component';





@NgModule({
  declarations: [
    ProdutoReadComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  exports:[
    ProdutoReadComponent
  ]
})
export class ProdutosModule { }
