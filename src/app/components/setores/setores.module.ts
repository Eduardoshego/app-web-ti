import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetoresReadComponent } from './setores-read/setores-read.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SetoresReadComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    RouterModule
    
  ],
  exports: [
    SetoresReadComponent
  ]
})
export class SetoresModule { }
