import { CadastroReadComponent } from './cadastro-read/cadastro-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    CadastroReadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports:[
    CadastroReadComponent
  ]
})
export class CadastrosModule { }
