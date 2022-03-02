import { NgModule } from '@angular/core';


import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { ProdutoSaidaCreateComponent } from './produto-saida-create/produto-saida-create.component';
import { ProdutoSaidaReadComponent } from './produto-saida-read/produto-saida-read.component';






@NgModule({
  declarations: [
    
    ProdutoSaidaReadComponent
  ],
  imports: [
    AppMaterialModule
  ],
  exports: [
    ProdutoSaidaReadComponent
  ]
})
export class ProdutoSaidaModule { }
