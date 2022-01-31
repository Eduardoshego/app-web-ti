import { MatTableModule } from '@angular/material/table';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module'




@NgModule({
  declarations: [
    ProdutoReadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports:[
    ProdutoReadComponent
  ]
})
export class ProdutosModule { }
