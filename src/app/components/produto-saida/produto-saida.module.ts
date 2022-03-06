import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { ProdutoSaidaCreateComponent } from './produto-saida-create/produto-saida-create.component';
import { ProdutoSaidaReadComponent } from './produto-saida-read/produto-saida-read.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    
    ProdutoSaidaReadComponent,
    ProdutoSaidaCreateComponent
  ],
  imports: [
    AppMaterialModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    ProdutoSaidaReadComponent
  ]
})
export class ProdutoSaidaModule { }
