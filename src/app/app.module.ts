import { ViewsModule } from './views/views.module';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TemplatesModule } from './components/templates/templates.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';









import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu'

// Componentes da views




// Componentes referente ao CRUD de Produtos.
import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';

// Componentes referente ao CRUD de Pessoas

import { CadastroCreateComponent } from './components/cadastros/cadastro-create/cadastro-create';
import { CadastroReadComponent } from './components/cadastros/cadastro-read/cadastro-read.component';


import { FlexLayoutModule } from '@angular/flex-layout'






import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { ProdutoSaidaReadComponent } from './components/produto-saida/produto-saida-read/produto-saida-read.component';
import { LoginComponent } from './components/login/login.component';
import { ComputadorReadComponent } from './components/equipamentos/computadores/computador-read/computador-read.component'
  ;







@NgModule({
  declarations: [
    AppComponent,   
    EstoqueCreatedComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    CadastroCreateComponent,
    ProdutoSaidaReadComponent,
    LoginComponent,
    ComputadorReadComponent,











  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    TemplatesModule,
    ViewsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
