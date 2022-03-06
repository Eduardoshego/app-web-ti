import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetoresReadComponent } from './setores-read/setores-read.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    SetoresReadComponent
  ],
  imports: [
    CommonModule,

    RouterModule,
    AppMaterialModule,
    BrowserModule

  ],
  exports: [
    SetoresReadComponent
  ]
})
export class SetoresModule { }
