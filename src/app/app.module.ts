import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCreateComponent } from './components/cadastros/cadastro-create/cadastro-create';
import { ComputadorReadComponent } from './components/equipamentos/computadores/computador-read/computador-read.component';
import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { LoginComponent } from './components/login/login.component';

import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { TemplatesModule } from './components/templates/templates.module';
import { ViewsModule } from './views/views.module';
import {MatSelectModule} from '@angular/material/select';

import {ProdutoSaidaModule} from './components/produto-saida/produto-saida.module'









// Componentes do Angular Material
// Componentes da views




// Componentes referente ao CRUD de Produtos.
// Componentes referente ao CRUD de Pessoas














@NgModule({
  declarations: [
    AppComponent,
    EstoqueCreatedComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    CadastroCreateComponent,
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
    ProdutoSaidaModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
